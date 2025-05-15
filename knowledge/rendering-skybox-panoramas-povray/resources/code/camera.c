#declare camloc = <X,Y,Z>;
camera {
 location camloc
 right x
 up y
 direction z

 angle 90

 // Left.
 #if (frame_number = 0)
  look_at camloc + x
 // Right.
 #else #if (frame_number = 1)
  look_at camloc + -x
 // Top.
 #else #if (frame_number = 2)
  look_at camloc + y
 // Bottom.
 #else #if (frame_number = 3)
  look_at camloc + -y
 // Front.
 #else #if (frame_number = 4)
  look_at camloc + z
 // Back.
 #else #if (frame_number = 5)
  look_at camloc + -z
 #end #end #end #end #end #end
}
