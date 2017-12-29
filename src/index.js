import './style';
import { h } from 'preact';
import FacebookButton from './FacebookButton';
import PhoneImage from './PhoneImage';
import GithubCorner from './GithubCorner';

export default () => (
  <div class="container">
    <div class="left-pane">
      <h1 class="title">Series Notifier</h1>
      <h2 class="subtitle">
        Notifies you when <span class="text-orange">your favorite show</span> releases a new episode
      </h2>
      <FacebookButton />
    </div>
    <div class="right-pane">
      <PhoneImage />
    </div>
    <GithubCorner />
  </div>
);
