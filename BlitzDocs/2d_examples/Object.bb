; Object

Type MYTYPE
 Field myint
End Type

Dim HandleArray(4)

For count=1 To 3
 temp.MYTYPE=New MYTYPE
 HandleArray(count)=Handle(temp)
 Print "HandleArray("+count+")="+HandleArray(count)
Next

Delete Object.MYTYPE(HandleArray(2))
Print "Deleted 2nd MYTYPE"
temp.MYTYPE=New MYTYPE
HandleArray(4)=Handle(temp)

For count=1 To 4
 temp.MYTYPE=Object.MYTYPE(HandleArray(count))
 Print "temp="+Handle(temp)
Next

WaitKey()
End