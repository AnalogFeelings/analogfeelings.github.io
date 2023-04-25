; Wireframe Example
; -----------------

Graphics3D 800, 600
SetBuffer BackBuffer()

; Remember to replace with your own font.
font = LoadFont("Arial.ttf")
SetFont font

camera = CreateCamera()

light = CreateLight()
RotateEntity light, 90, 0, 0

sphere = CreateSphere(32)
PositionEntity sphere, 0, 0, 2

While Not KeyDown(1)
    ; Toggle wireframe enable value between true and false when spacebar is pressed
    If KeyHit(57) = True Then enable = 1 - enable

    ; Enable/disable wireframe rendering
    WireFrame enable

    RenderWorld

    Text 0, 0, "Press spacebar to toggle between Wireframe True/False"
    If enable = True Then Text 0, 20, "Wireframe True" Else Text 0, 20, "Wireframe False"

    Flip
Wend

End
