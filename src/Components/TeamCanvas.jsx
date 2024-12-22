import React, { useEffect, useRef } from "react";

// Constants
const thresholdEnergy = 50;
const eMax = 70;
const eMin = 30;
const TwoPI = Math.PI * 2;
const teams = ["#a95f32", "#f2a549", "#ef7d3f", "#806240"];

// Utility to get a random team
const getRandomTeam = () => teams[Math.floor(Math.random() * teams.length)];

// Particle Class
class Particle {
  constructor(xMax, yMax, eMax, eMin, team) {
    this.generate(xMax, yMax, eMax, eMin);
    this.dead = false;
    this.team = team;
    this.bravery = Math.random() * 0.01;
    this.teamWork = Math.random() * 0.01;
  }

  generate(xMax, yMax, eMax, eMin) {
    this.x = Math.floor(xMax * Math.random());
    this.y = Math.floor(yMax * Math.random());
    this.xVel = Math.random() * 0.5;
    this.yVel = Math.random() * 0.5;
    this.energy = Math.floor((eMax - eMin) * Math.random() + eMin);
  }

  distance(par2) {
    return Math.sqrt((par2.x - this.x) ** 2 + (par2.y - this.y) ** 2);
  }

  isReachable(p2, e2) {
    return (this.energy * e2) / this.distance(p2) > thresholdEnergy;
  }

  isEnemy(p2) {
    return this.team !== p2.team;
  }

  canFire(p2) {
    return this.isEnemy(p2) ? this.isReachable(p2, this.energy) : false;
  }

  isInsideFriendZoneOf(p2) {
    return p2 !== this && !this.isEnemy(p2) && this.isReachable(p2, p2.energy);
  }

  attack(enemy) {
    const dir = this.directionTo(enemy);
    this.xVel += Math.cos(dir) * this.bravery;
    this.yVel += Math.sin(dir) * this.bravery;
    enemy.energy -= this.energy * 0.01;
  }

  collaborate(friend) {
    const dir = this.directionTo(friend);
    this.xVel += Math.cos(dir) * this.teamWork;
    this.yVel += Math.sin(dir) * this.teamWork;
    if (this.energy < eMax) {
      this.energy += friend.energy * 0.01;
    }
  }

  directionTo(p2) {
    return Math.atan2(p2.y - this.y, p2.x - this.x);
  }

  move(maxX, maxY) {
    this.x += this.xVel;
    this.y += this.yVel;
    this.energy -= 0.001;

    if (this.energy <= 0) {
      this.dead = true;
      return;
    }

    this.x = (this.x + maxX) % maxX;
    this.y = (this.y + maxY) % maxY;
  }

  render(ctx) {
    if (this.energy <= 0) return;

    ctx.beginPath();
    ctx.shadowBlur = this.energy / 2;
    ctx.shadowColor = ctx.strokeStyle = ctx.fillStyle = this.team;

    ctx.arc(this.x, this.y, this.energy / 10, 0, TwoPI, false);
    ctx.closePath();
    ctx.fill();

    ctx.shadowBlur = 0;
    const fragments = Math.floor(Math.random() * 10);

    for (let i = 0; i < fragments; i++) {
      ctx.beginPath();
      const dx = (Math.random() * this.energy) / 4 - this.energy / 8;
      const dy = (Math.random() * this.energy) / 4 - this.energy / 8;
      ctx.moveTo(this.x + dx, this.y + dy);
      ctx.lineTo(this.x + dy, this.y + dx);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

// React Component
const TeamCanvas = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = Array.from(
        { length: Math.pow(canvas.width * canvas.height, 1 / 3) },
        () =>
          new Particle(canvas.width, canvas.height, eMax, eMin, getRandomTeam())
      );
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => !p.dead);
      const aliveParticles = particlesRef.current.length;

      for (let i = 0; i < aliveParticles; i++) {
        particlesRef.current[i].move(canvas.width, canvas.height);
        particlesRef.current[i].render(ctx);
      }

      while (
        particlesRef.current.length <
        Math.pow(canvas.width * canvas.height, 1 / 3)
      ) {
        particlesRef.current.push(
          new Particle(canvas.width, canvas.height, eMax, eMin, getRandomTeam())
        );
      }

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full"></canvas>;
};

export default TeamCanvas;
