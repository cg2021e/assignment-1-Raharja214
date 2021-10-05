function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var leftVertices = [
        // sisi depan
        -0.51, -0.52,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.28, -0.52,    0.951, 0.953, 0.930,

        0.28, -0.52,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.39, 0.15,    0.951, 0.953, 0.930,

        0.39, 0.15,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.37, 0.64,    0.951, 0.953, 0.930,

        0.37, 0.64,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.3, 0.6,     0.951, 0.953, 0.930,

        0.3, 0.6,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.44, 0.06,  0.951, 0.953, 0.930,
        
        -0.33, 0.58,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.55, 0.67,  0.951, 0.953, 0.930,

        0.2, 0.56,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.33, 0.58,  0.951, 0.953, 0.930,

        0.37, 0.64,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.2, 0.56,  0.951, 0.953, 0.930,

        -0.44, 0.06,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.55, 0.67,    0.951, 0.953, 0.930,

        -0.55, 0.67,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.59, 0.15,  0.951, 0.953, 0.930,

        -0.59, 0.15,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.51, -0.52,   0.951, 0.953, 0.930,

        //tutup toples sisi kiri
        -0.55, 0.89,   0.500, 0.553, 0.718,
        -0.33, 0.81,   0.500, 0.553, 0.718,
        -0.33, 0.58,   0.500, 0.553, 0.718,

        -0.33, 0.58,   0.500, 0.553, 0.718,
        -0.55, 0.67,   0.500, 0.553, 0.718,
        -0.55, 0.89,   0.500, 0.553, 0.718,

        //tutup toples sisi tengah
       -0.33, 0.81,  0.500, 0.553, 0.718,
        0.2, 0.795,   0.500, 0.553, 0.718,
        0.2, 0.56,    0.500, 0.553, 0.718,
        0.2, 0.56,    0.500, 0.553, 0.718,
       -0.33, 0.58,   0.500, 0.553, 0.718,
       -0.33, 0.81,   0.500, 0.553, 0.718,

       //tutup toples sisi kanan
        0.2, 0.795,   0.500, 0.553, 0.718,
        0.38, 0.86,   0.500, 0.553, 0.718,
        0.37, 0.64,   0.500, 0.553, 0.718,

        0.2, 0.56,   0.500, 0.553, 0.718,
        0.37, 0.64,   0.500, 0.553, 0.718,
        0.2, 0.795,   0.500, 0.553, 0.718,
    
        // tutup toples sisi atas
        -0.55, 0.89,   0.400, 0.553, 0.718,
        -0.09, 0.9,   0.400, 0.553, 0.718,
        -0.33, 0.81,   0.400, 0.553, 0.718,
    
        -0.33, 0.81,   0.400, 0.553, 0.718,
        -0.09, 0.9,   0.400, 0.553, 0.718,
        0.2, 0.795,   0.400, 0.553, 0.718,
    
        0.2, 0.795,   0.400, 0.553, 0.718,
        -0.09, 0.9,   0.400, 0.553, 0.718,
        0.38, 0.86,   0.400, 0.553, 0.718,
    
        0.38, 0.86,   0.400, 0.553, 0.718,
        -0.09, 0.9,   0.400, 0.553, 0.718,
        0.38, 0.91,   0.400, 0.553, 0.718,
    
        0.38, 0.91,   0.400, 0.553, 0.718,
        -0.09, 0.9,   0.400, 0.553, 0.718,
        0.26, 0.95,   0.400, 0.553, 0.718,
    
        0.26, 0.95,   0.400, 0.553, 0.718,
        -0.09, 0.9,   0.400, 0.553, 0.718,
        -0.45, 0.95,   0.400, 0.553, 0.718,
    
       -0.45, 0.95,   0.400, 0.553, 0.718,
       -0.09, 0.9,   0.400, 0.553, 0.718,
       -0.55, 0.927,   0.400, 0.553, 0.718,
    
       -0.55, 0.927,   0.400, 0.553, 0.718,
       -0.09, 0.9,   0.400, 0.553, 0.718,
       -0.55, 0.89,   0.400, 0.553, 0.718,
    
    ];

    var rightVertices = [
        // sisi depan
        -0.51, -0.52,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.28, -0.52,    0.951, 0.953, 0.930,

        0.28, -0.52,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.39, 0.15,    0.951, 0.953, 0.930,

        0.39, 0.15,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.37, 0.64,    0.951, 0.953, 0.930,

        0.37, 0.64,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.3, 0.6,     0.951, 0.953, 0.930,

        0.3, 0.6,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.44, 0.06,  0.951, 0.953, 0.930,
        
        -0.33, 0.58,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.55, 0.67,  0.951, 0.953, 0.930,

        0.2, 0.56,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.33, 0.58,  0.951, 0.953, 0.930,

        0.37, 0.64,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        0.2, 0.56,  0.951, 0.953, 0.930,

        -0.44, 0.06,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.55, 0.67,    0.951, 0.953, 0.930,

        -0.55, 0.67,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.59, 0.15,  0.951, 0.953, 0.930,

        -0.59, 0.15,   0.951, 0.953, 0.930,
        -0.05, -0.05,   0.951, 0.953, 0.930,
        -0.51, -0.52,   0.951, 0.953, 0.930,

        //tutup toples sisi kiri
        -0.55, 0.89,   0.500, 0.553, 0.718,
        -0.33, 0.81,   0.500, 0.553, 0.718,
        -0.33, 0.58,   0.500, 0.553, 0.718,

        -0.33, 0.58,   0.500, 0.553, 0.718,
        -0.55, 0.67,   0.500, 0.553, 0.718,
        -0.55, 0.89,   0.500, 0.553, 0.718,

        //tutup toples sisi tengah
       -0.33, 0.81,  0.500, 0.553, 0.718,
        0.2, 0.795,   0.500, 0.553, 0.718,
        0.2, 0.56,    0.500, 0.553, 0.718,
        0.2, 0.56,    0.500, 0.553, 0.718,
       -0.33, 0.58,   0.500, 0.553, 0.718,
       -0.33, 0.81,   0.500, 0.553, 0.718,

       //tutup toples sisi kanan
        0.2, 0.795,   0.500, 0.553, 0.718,
        0.38, 0.86,   0.500, 0.553, 0.718,
        0.37, 0.64,   0.500, 0.553, 0.718,

        0.2, 0.56,   0.500, 0.553, 0.718,
        0.37, 0.64,   0.500, 0.553, 0.718,
        0.2, 0.795,   0.500, 0.553, 0.718,
    
        // tutup toples sisi atas
        -0.55, 0.89,   0.550, 0.553, 0.718,
        -0.09, 0.9,   0.550, 0.553, 0.718,
        -0.33, 0.81,   0.550, 0.553, 0.718,
    
        -0.33, 0.81,   0.550, 0.553, 0.718,
        -0.09, 0.9,   0.550, 0.553, 0.718,
        0.2, 0.795,   0.550, 0.553, 0.718,
    
        0.2, 0.795,   0.550, 0.553, 0.718,
        -0.09, 0.9,   0.550, 0.553, 0.718,
        0.38, 0.86,   0.550, 0.553, 0.718,
    
        0.38, 0.86,   0.550, 0.553, 0.718,
        -0.09, 0.9,   0.550, 0.553, 0.718,
        0.38, 0.91,   0.550, 0.553, 0.718,
    
        0.38, 0.91,   0.550, 0.553, 0.718,
        -0.09, 0.9,   0.550, 0.553, 0.718,
        0.26, 0.95,   0.550, 0.553, 0.718,
    
        0.26, 0.95,   0.550, 0.553, 0.718,
        -0.09, 0.9,   0.550, 0.553, 0.718,
        -0.45, 0.95,  0.550, 0.553, 0.718,
    
       -0.45, 0.95,   0.550, 0.553, 0.718,
       -0.09, 0.9,   0.550, 0.553, 0.718,
       -0.55, 0.927,   0.550, 0.553, 0.718,
    
       -0.55, 0.927,   0.550, 0.553, 0.718,
       -0.09, 0.9,   0.550, 0.553, 0.718,
       -0.55, 0.89,   0.550, 0.553, 0.718,
    
    ];

    for (let vert = 0; vert < leftVertices.length; vert += 5){
        leftVertices[vert] -= 1.0;
    }
    for (let vert = 0; vert < rightVertices.length; vert += 5){
        rightVertices[vert] += 1.0;
    }

    var vertices = [...leftVertices,...rightVertices]; 

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 2); 
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    
    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    
    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

     // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    
    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    
    // Teach the computer how to collect
    // the positional values from ARRAY_BUFFER
    // to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speed = 0.0222;
    var dy = 0;
    // Create a uniform to animate the vertices
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        //control the bouncing range
        if (dy >= 0.75 || dy <= -0.55) speed = -speed;
		dy += speed;

    const rightPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, dy, 0.0, 1.0,
    ]

	const leftPosition = [
		1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		0, 0.0, 0.0, 1.0,
	]
		
	gl.clearColor(0.4, 0.5, 0.1, 0.8); 
	 gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length/5);

		gl.uniformMatrix4fv(uTranslate, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, leftVertices.length/5, rightVertices.length/5);
            
        requestAnimationFrame(render);
    }
    render();
}