/*------------

TOP用

--------------*/

(function(){
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleColors = [
    [250, 219, 223], // #FADBDF
    [235, 233, 243]  // #EBE9F3
  ];

  function createParticles(count, radiusRange, speedRange) {
    const arr = [];
    for(let i=0; i<count; i++){
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (radiusRange[1]-radiusRange[0]) + radiusRange[0],
        speed: Math.random() * (speedRange[1]-speedRange[0]) + speedRange[0],
        angle: Math.random() * Math.PI*2,
        angleSpeed: (Math.random() * 0.0008 + 0.0003),
        color: particleColors[Math.floor(Math.random()*particleColors.length)],
        opacityPhase: Math.random() * Math.PI*2,
        opacitySpeed: Math.random() * 0.01 + 0.008
      });
    }
    return arr;
  }

  const layer1 = createParticles(120, [0.8,1.5], [0.05,0.08]);
  const layer2 = createParticles(80, [0.5,1.2], [0.10,0.13]);
  const layer3 = createParticles(30, [2.5,4], [0.017,0.20]);
  const allParticles = [...layer1, ...layer2, ...layer3];

  function animate() {
    const grad = ctx.createLinearGradient(0,0,0,height);
    grad.addColorStop(0, '#311F2F');
    grad.addColorStop(1, '#1E1726');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,width,height);

    for(const p of allParticles){
      p.y -= p.speed;
      if(p.y < 0) p.y = height;
      p.x += Math.sin(p.angle) * 0.001;
      p.angle += p.angleSpeed;
      if(p.x < 0) p.x = width;
      if(p.x > width) p.x = 0;

      const opacity = 0.5 + 0.5 * Math.sin(p.opacityPhase);
      p.opacityPhase += p.opacitySpeed;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();

/*------------

2番目用

--------------*/


(function(){
  const canvas = document.getElementById('bg2');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleColors = [
    [250, 243, 155], 
    [235, 233, 243]  
  ];

  function createParticles(count, radiusRange, speedRange) {
    const arr = [];
    for(let i=0; i<count; i++){
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (radiusRange[1]-radiusRange[0]) + radiusRange[0],
        speed: Math.random() * (speedRange[1]-speedRange[0]) + speedRange[0],
        angle: Math.random() * Math.PI*2,
        angleSpeed: (Math.random() * 0.0008 + 0.0003),
        color: particleColors[Math.floor(Math.random()*particleColors.length)],
        opacityPhase: Math.random() * Math.PI*2,
        opacitySpeed: Math.random() * 0.01 + 0.008
      });
    }
    return arr;
  }

  const layer1 = createParticles(120, [0.8,1.5], [0.05,0.08]);
  const layer2 = createParticles(80, [0.5,1.2], [0.10,0.13]);
  const layer3 = createParticles(30, [2.5,4], [0.017,0.20]);
  const allParticles = [...layer1, ...layer2, ...layer3];

  function animate() {
    const grad = ctx.createLinearGradient(0,0,0,height);
    grad.addColorStop(0, '#1E1726');
    grad.addColorStop(1, '#33211F');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,width,height);

    for(const p of allParticles){
      p.y -= p.speed;
      if(p.y < 0) p.y = height;
      p.x += Math.sin(p.angle) * 0.001;
      p.angle += p.angleSpeed;
      if(p.x < 0) p.x = width;
      if(p.x > width) p.x = 0;

      const opacity = 0.5 + 0.5 * Math.sin(p.opacityPhase);
      p.opacityPhase += p.opacitySpeed;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();


/*------------

3番目用

--------------*/


(function(){
  const canvas = document.getElementById('bg3');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleColors = [
    [187, 241, 255], 
    [235, 233, 243]  
  ];

  function createParticles(count, radiusRange, speedRange) {
    const arr = [];
    for(let i=0; i<count; i++){
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (radiusRange[1]-radiusRange[0]) + radiusRange[0],
        speed: Math.random() * (speedRange[1]-speedRange[0]) + speedRange[0],
        angle: Math.random() * Math.PI*2,
        angleSpeed: (Math.random() * 0.0008 + 0.0003),
        color: particleColors[Math.floor(Math.random()*particleColors.length)],
        opacityPhase: Math.random() * Math.PI*2,
        opacitySpeed: Math.random() * 0.01 + 0.008
      });
    }
    return arr;
  }

  const layer1 = createParticles(120, [0.8,1.5], [0.05,0.08]);
  const layer2 = createParticles(80, [0.5,1.2], [0.10,0.13]);
  const layer3 = createParticles(30, [2.5,4], [0.017,0.20]);
  const allParticles = [...layer1, ...layer2, ...layer3];

  function animate() {
    const grad = ctx.createLinearGradient(0,0,0,height);
    grad.addColorStop(0, '#33211F');
    grad.addColorStop(1, '#10193A');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,width,height);

    for(const p of allParticles){
      p.y -= p.speed;
      if(p.y < 0) p.y = height;
      p.x += Math.sin(p.angle) * 0.001;
      p.angle += p.angleSpeed;
      if(p.x < 0) p.x = width;
      if(p.x > width) p.x = 0;

      const opacity = 0.5 + 0.5 * Math.sin(p.opacityPhase);
      p.opacityPhase += p.opacitySpeed;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();


/*------------

4番目用

--------------*/


(function(){
  const canvas = document.getElementById('bg4');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleColors = [
    [255, 219, 219], 
    [235, 233, 243]  
  ];

  function createParticles(count, radiusRange, speedRange) {
    const arr = [];
    for(let i=0; i<count; i++){
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (radiusRange[1]-radiusRange[0]) + radiusRange[0],
        speed: Math.random() * (speedRange[1]-speedRange[0]) + speedRange[0],
        angle: Math.random() * Math.PI*2,
        angleSpeed: (Math.random() * 0.0008 + 0.0003),
        color: particleColors[Math.floor(Math.random()*particleColors.length)],
        opacityPhase: Math.random() * Math.PI*2,
        opacitySpeed: Math.random() * 0.01 + 0.008
      });
    }
    return arr;
  }

  const layer1 = createParticles(120, [0.8,1.5], [0.05,0.08]);
  const layer2 = createParticles(80, [0.5,1.2], [0.10,0.13]);
  const layer3 = createParticles(30, [2.5,4], [0.017,0.20]);
  const allParticles = [...layer1, ...layer2, ...layer3];

  function animate() {
    const grad = ctx.createLinearGradient(0,0,0,height);
    grad.addColorStop(0, '#10193A');
    grad.addColorStop(1, '#371A2B');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,width,height);

    for(const p of allParticles){
      p.y -= p.speed;
      if(p.y < 0) p.y = height;
      p.x += Math.sin(p.angle) * 0.001;
      p.angle += p.angleSpeed;
      if(p.x < 0) p.x = width;
      if(p.x > width) p.x = 0;

      const opacity = 0.5 + 0.5 * Math.sin(p.opacityPhase);
      p.opacityPhase += p.opacitySpeed;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();



/*------------

5番目用

--------------*/


(function(){
  const canvas = document.getElementById('bg5');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particleColors = [
    [180, 171, 255], 
    [235, 233, 243]  
  ];

  function createParticles(count, radiusRange, speedRange) {
    const arr = [];
    for(let i=0; i<count; i++){
      arr.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (radiusRange[1]-radiusRange[0]) + radiusRange[0],
        speed: Math.random() * (speedRange[1]-speedRange[0]) + speedRange[0],
        angle: Math.random() * Math.PI*2,
        angleSpeed: (Math.random() * 0.0008 + 0.0003),
        color: particleColors[Math.floor(Math.random()*particleColors.length)],
        opacityPhase: Math.random() * Math.PI*2,
        opacitySpeed: Math.random() * 0.01 + 0.008
      });
    }
    return arr;
  }

  const layer1 = createParticles(120, [0.8,1.5], [0.05,0.08]);
  const layer2 = createParticles(80, [0.5,1.2], [0.10,0.13]);
  const layer3 = createParticles(30, [2.5,4], [0.017,0.20]);
  const allParticles = [...layer1, ...layer2, ...layer3];

  function animate() {
    const grad = ctx.createLinearGradient(0,0,0,height);
    grad.addColorStop(0, '#371A2B');
    grad.addColorStop(1, '#291A37');
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,width,height);

    for(const p of allParticles){
      p.y -= p.speed;
      if(p.y < 0) p.y = height;
      p.x += Math.sin(p.angle) * 0.001;
      p.angle += p.angleSpeed;
      if(p.x < 0) p.x = width;
      if(p.x > width) p.x = 0;

      const opacity = 0.5 + 0.5 * Math.sin(p.opacityPhase);
      p.opacityPhase += p.opacitySpeed;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
})();