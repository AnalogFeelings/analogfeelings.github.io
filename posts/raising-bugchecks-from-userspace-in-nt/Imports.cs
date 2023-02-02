[DllImport("ntdll.dll")]
private static extern uint RtlAdjustPrivilege(int Privilege, bool bEnablePrivilege, bool IsThreadPrivilege,
                                                                                    out bool PreviousValue);
[DllImport("ntdll.dll")]
private static extern uint NtRaiseHardError(uint ErrorStatus, uint NumberOfParameters, uint UnicodeStringParameterMask,
                                                                                       IntPtr Parameters,
                                                                                       uint ValidResponseOption, out uint Response);