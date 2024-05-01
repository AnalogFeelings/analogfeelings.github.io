// This file is licensed under the CC0 license (https://creativecommons.org/public-domain/cc0/).

// Argument 0: The path of the .exe to patch.

using System.IO;

if (Args.Count < 1)
	ErrorAndQuit("Invalid amount of arguments.");

string targetFile = Args[0];

if (!File.Exists(targetFile))
	ErrorAndQuit($"Target file \"{targetFile}\" doesn't exist.");

using(Stream stream = File.Open(targetFile, FileMode.Open, FileAccess.ReadWrite))
{
	using BinaryReader reader = new BinaryReader(stream);
	using BinaryWriter writer = new BinaryWriter(stream);
	
	if (reader.ReadUInt16() != 0x5A4D)
		ErrorAndQuit("Executable file does not have a valid MZ header.");
		
	stream.Seek(0x3C, SeekOrigin.Begin);
	stream.Seek(reader.ReadUInt32(), SeekOrigin.Begin);
	
	if (reader.ReadUInt32() != 0x00004550)
		ErrorAndQuit("Executable file does not have a valid PE header.");
		
	stream.Seek(0x14, SeekOrigin.Current);
	
	if (reader.ReadUInt16() != 0x10b)
		ErrorAndQuit("Executable file is not a PE32 file.");
		
	stream.Seek(0x26, SeekOrigin.Current);
	
	writer.Write(0x0001); // Write operating system version.
	
	stream.Seek(0x4, SeekOrigin.Current);
	
	writer.Write(0x0004); // Write subsystem version.
}

void ErrorAndQuit(string message)
{
	Console.WriteLine(message);
	Environment.Exit(-1);
}