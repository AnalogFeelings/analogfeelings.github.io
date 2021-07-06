; BufferDirty

Graphics 640,480,0,1
SetBuffer BackBuffer()

image=CreateImage(64,64)

For iy=0 To ImageHeight(image)-1
 For ix=0 To ImageWidth(image)-1
  rgb=(ix*4) Or (iy*4 Shl 16)
  WritePixel ix,iy,rgb,ImageBuffer(image)
 Next
Next

BufferDirty ImageBuffer(image) ;Comment this out to see the difference

While Not KeyDown(1)
 Cls

 Text 0,0,"Press Alt-Tab to minimize the window"
 DrawImage image,50,50

 Flip
Wend
End
