; GraphicsLost

Graphics 640,480,0,2
SetBuffer BackBuffer()

While Not KeyDown(1)
 If GraphicsLost() Then RuntimeError "DirectX Error: please restart game"
 Cls

 Text 0,0,"GraphicsLost="+(GraphicsLost())

 Flip
Wend
End