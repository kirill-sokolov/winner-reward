import { Component, OnInit } from '@angular/core';
import { rewardsJson } from './rewards';

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
  }

  loadRewards(): Promise<Array<IReward>> {
    return new Promise<Array<IReward>>((resolve, reject) => {
      setTimeout(() => resolve(rewardsJson), 300) // server response simulation
    });
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
