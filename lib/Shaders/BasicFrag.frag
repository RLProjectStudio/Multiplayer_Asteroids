#version 450 core

layout (location=0) in vec2 TxtCoord;

layout (location=0) out vec4 fFragClr;

uniform sampler2D uTex2d;

uniform vec4 uColor;
uniform bool uTextureCheck;

void main () 
{
	fFragClr = vec4(uColor);

	if(!uTextureCheck)
	{
		fFragClr = vec4(uColor);
	}
	else
	{
		fFragClr = vec4(1.0f, 1.0f, 1.0f, uColor.a) * texture(uTex2d, TxtCoord);
			
		if (fFragClr.a == 0.0) 
		{
			discard;
		}
	
	}
}
