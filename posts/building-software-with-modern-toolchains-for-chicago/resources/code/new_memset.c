// Disable optimization since MSVC just replaces it with a call to memset,
// even on the old MiniCRT implementation.
#pragma optimize("", off)
void* MCRT_FN mini_memset(void* dest, char c, unsigned int len)
{
	unsigned char* ptr = (unsigned char*)dest;

	while (len-- > 0)
		*ptr++ = c;

	return dest;
}
#pragma optimize("", on)
