; Handle

Type MYTYPE
 Field myint
End Type

For count=1 To 3
 temp.MYTYPE=New MYTYPE
 Print "temp="+Handle(temp)
Next

temp=First MYTYPE
temp=After temp
Delete temp
Print "Deleted 2nd MYTYPE"
temp.MYTYPE=New MYTYPE

For temp.MYTYPE=Each MYTYPE
 Print "temp="+Handle(temp)
Next

WaitKey()
End