void* MCRT_FN mini_memset(void* dest, char c, unsigned int len)
{
    unsigned int i;
    unsigned int fill;
    unsigned int chunks = len / sizeof(fill);
    char* char_dest = (char*)dest;
    unsigned int* uint_dest = (unsigned int *)dest;

    //
    //  Note we go from the back to the front.  This is to
    //  prevent newer compilers from noticing what we're doing
    //  and trying to invoke the built-in memset instead of us.
    //

    fill = (c<<24) + (c<<16) + (c<<8) + c;

    for (i = len; i > chunks * sizeof(fill); i--) {
        char_dest[i - 1] = c;
    }

    for (i = chunks; i > 0; i--) {
        uint_dest[i - 1] = fill;
    }

    return dest;
}
