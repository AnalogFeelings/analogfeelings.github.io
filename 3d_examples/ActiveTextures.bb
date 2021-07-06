; ActiveTextures

Graphics3D 640,480,0,2

tex1=CreateTexture(100,100)
tex2=CreateTexture(100,100)
tex3=CreateTexture(100,100)

Print "Textures="+(ActiveTextures())

FreeTexture tex2

Print "Textures="+(ActiveTextures())

WaitKey()
End