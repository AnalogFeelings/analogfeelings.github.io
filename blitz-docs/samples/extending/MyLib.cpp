#include "MyLib.h"

BLITZ3D(float) VecDistance(float x1, float y1, float z1, float x2, float y2, float z2)
{
	BlitzDebugLog("Hey! You called VecDistance inside MyLib.dll!");

	float dx = x1 - x2
	float dy = y1 - y2
	float dz = z1 - z2;

	return sqrtf(dx * dx + dy * dy + dz * dz);
}

BLITZ3D(void) CrashLol(const char* str)
{
	BlitzDebugLog("Haha im gonna crash now!!");
	BlitzRuntimeError(str);
}

BLITZ3D(const char*) Ping()
{
	BlitzDebugLog("Pong!");
	return "Pong";
}
