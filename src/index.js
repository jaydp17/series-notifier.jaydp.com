import "./style";
import { Component } from "preact";
import FacebookButton from "./FacebookButton";

export default class App extends Component {
  render() {
    return (
      <div class="container">
        <h1 class="title">Series Notifier</h1>
        <h2 class="subtitle">
          Notifies you when <span class="text-orange">your favorite show</span>{" "}
          releases a new episode
        </h2>
        <FacebookButton />
      </div>
    );
  }
}
