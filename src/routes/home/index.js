import { h } from 'preact';
import { Link } from 'preact-router/match';

const Home = ({page}) => (
  <div class="text-center">
    <h1 class="text-2xl text-indigo-700 capitalize">{page}</h1>
    <p class="">this is the {page} component</p>
    <Link class="text-teal-400 text-lg underline hover:text-teal-600" href="/about">
      To about
    </Link>
  </div>
);

export default Home;
