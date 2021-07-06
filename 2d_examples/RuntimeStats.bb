; RuntimeStats

Type MYTYPE
 Field myint
End Type

For count=1 To 3
 temp.MYTYPE=New MYTYPE
Next
RuntimeStats

Delete First MYTYPE
mystring$="test"
RuntimeStats

WaitKey()
End