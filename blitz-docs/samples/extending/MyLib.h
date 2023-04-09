#pragma once

#include <math.h>
#include <string.h>
#include <stdlib.h>

//Convenience macro!
#define BLITZ3D(x) extern "C" __declspec(dllexport) x _stdcall

//BlitzBasic functions.
__declspec(dllimport) void __cdecl BlitzDebugLog(const char* msg);
__declspec(dllimport) void __cdecl BlitzRuntimeError(const char* msg);

BLITZ3D(float) VecDistance(float x1, float y1, float z1, float x2, float y2, float z2);
BLITZ3D(void) CrashLol(const char* str);
BLITZ3D(const char*) Ping();
