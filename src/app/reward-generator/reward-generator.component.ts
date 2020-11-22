import { Component, OnInit } from '@angular/core';
import { rewardsJson } from './rewards';
import confetti from 'canvas-confetti';

interface IReward {
  name: string,
  count: number,
  stock: number,
  thumbnail: string
}

@Component({
  selector: 'app-reward-generator',
  templateUrl: './reward-generator.component.html',
  styleUrls: ['./reward-generator.component.css']
})
export class RewardGeneratorComponent implements OnInit {
  isLoading: boolean = true
  reward: IReward
  rewards: IReward[]
  rewardStack: IReward[]

  constructor() { }

  ngOnInit(): void {
    this.loadRewards()
      .then((rewards) => {
        this.rewards = rewards.filter((reward) => reward.count > 0)
        this.rewardStack = this.getRewardStack(rewards);
        this.isLoading = false
      })
      .catch(() => console.log('loadReward Error'));
  }

  getReward(): void {
    const randomIndex = Math.floor(Math.random() * this.rewardStack.length) | 0
    this.reward = this.rewardStack[randomIndex]
    this.runFireworkAnimation();
    this.runConfettiAnimationInMiddle(500);
    this.runConfettiAnimationOnSides();
  }

  loadRewards(): Promise<Array<IReward>> {
    return new Promise<Array<IReward>>((resolve, reject) => {
      setTimeout(() => resolve(rewardsJson), 300) // server response simulation
    });
  }

  private runConfettiAnimationOnSides(count = 2) {
    const end = Date.now() + (1 * 1000);
    const colors = [
      ['#FFFF00', '#FFFFE0'],
      ['#FFC0CB', '#FFDAB9'],
      ['#FF1493', '#FF69B4'],
      ['#ADFF2F', '#008080'],
      ['#00BFFF', '#00FFFF'],
      ['#8A2BE2', '#BB0000']
    ];
    const randomInRange = (min = 0, max = colors.length - 1) => {
      return Math.floor(Math.random() * (max - min) + min);
    }

    (function frame() {
      confetti({
        particleCount: count,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 1 },
        colors: colors[randomInRange()]
      });
      confetti({
        particleCount: count,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 1 },
        colors: colors[randomInRange()]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  private runConfettiAnimationInMiddle(count = 200) {
    const defaults = { origin: { y: 0.7 } };

    const fire = (particleRatio, opts) => {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, { spread: 26, startVelocity: 55, });
    fire(0.2, { spread: 60, });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45, });
  }

  private runFireworkAnimation() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      }));
      confetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      }));
    }, 100);
  }

  private getRewardStack(rewards: Array<IReward>) {
    let rewardStack = []
    rewards.forEach((reward) => {
      const multipleRewards = new Array(reward.count).fill(reward, 0, reward.count)
      rewardStack = rewardStack.concat(multipleRewards)
    })

    const fakeRewards = RewardGeneratorComponent.generateFakeRewards(rewardStack);
    return rewardStack
      .concat(fakeRewards)
      .sort(() => Math.random() - 0.5)
  }

  private static generateFakeRewards(rewards: Array<IReward>) {
    const thumbnail: string = 'https://w7.pngwing.com/pngs/400/918/png-transparent-flat-design-user-interface-design-medal-award-reward-orange-logo-symbol-thumbnail.png'
    const fakeReward: IReward = {
      name: 'Попробуй в следующий раз',
      count: rewards.length,
      stock: rewards.length,
      thumbnail: thumbnail
    }
    return new Array(rewards.length).fill(fakeReward, 0, rewards.length)
  }

}
