.data
source  BYTE  "This is the source string",0
target  BYTE  SIZEOF source DUP(0),0

.code
	mov  esi,0		; index register
	mov  ecx,SIZEOF source		; loop counter
L1:
	mov  al,source[esi]		; get char from source
	mov  target[esi],al		; store it in the target
	inc  esi		; move to next character
	loop L1		; repeat for entire string

