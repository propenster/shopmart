import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./components/hero/hero";
import { Topheader } from "./components/topheader/topheader";
import { Category } from "./components/category/category";
import { Newlyarrived } from "./components/newlyarrived/newlyarrived";
import { Trending } from "./components/trending/trending";
import { Ads } from "./components/ads/ads";
import { Bestselling } from "./components/bestselling/bestselling";
import { Popular } from "./components/popular/popular";
import { Mostpopular } from "./components/mostpopular/mostpopular";
import { Justarrived } from "./components/justarrived/justarrived";
import { Blog } from "./components/blog/blog";
import { Mobileapp } from "./components/mobileapp/mobileapp";
import { Alternatives } from "./components/alternatives/alternatives";
import { Incentives } from "./components/incentives/incentives";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Topheader, Category, Newlyarrived, Trending, Ads, Bestselling, Mostpopular, Justarrived, Blog, Mobileapp, Alternatives, Incentives, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shopmart');
}
