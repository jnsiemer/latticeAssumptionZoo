# Lattice Assumption Zoo

<img src="assets/images/logo.svg" alt="Lattice Assumption Zoo Logo" width="100px" align="right" />
This comprehensive wiki catalogues average-case lattice assumptions so that cryptography-affine readers can quickly build an intuition for each assumption, understand the rationale behind its hardness, explore its applications, access all relevant literature in one place, and stay informed on the latest cryptanalysis.

Furthermore, this resource is built with two additional goals in mind:
- For **designers**: This website facilitates keeping track of novel assumptions to encourage reusing established assumptions rather than introducing new, ad-hoc ones.
- For **cryptanalysts**: This repository serves as an organised index of targets, simplifying the identification of compelling assumptions to analyse.

Visit the live website at [latticeassumptionzoo.org](https://latticeassumptionzoo.org).

## Contributions and Revisions

Whether you have found an error, want to make a minor revision, add a new assumption, or describe an attack on an assumption, please follow [our Contribution guide](CONTRIBUTING.md) to incorporate your contribution to the Lattice Assumption Zoo.

## Hosting Locally

A more extensive step-by-step installation guide (preparing contributions) is available in the [INSTALL.md](INSTALL.md).

We are providing two options to host the site locally: Using a [Docker container](#using-docker) (recommended) or through a [manual installation](#manual-installation).

### Using Docker (Recommended)
1. Ensure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) (also bundled in [Docker Desktop](https://www.docker.com/products/docker-desktop/)) installed and _running_ on your machine. Further, verify that Docker Desktop provides enough resources: Settings → Resources (≥ 4 CPU cores, ≥ 4 GB Memory, ≥ 2 GB Swap, ≥ 5 GB disk space; higher values might be required based on other containers).
2. Open your terminal in the project root directory.
3. Build and start the local server by running:
```bash
docker compose up
```
4. Preview the site at `http://localhost:4000`.
5. Stop the container with `CTRL+C` or detach it using `d`. To stop it then, use `docker compose down`.

**Live Reload & Troubleshooting:** The Docker environment is configured with incremental builds and live-reload. Any changes will automatically trigger a partial rebuild and refresh your browser.

_Important:_ The incremental reloader might not recompile all necessary files if you change more fundamental files such as `references.bib`. Therefore, if the local site appears out-of-sync, simply stop the Docker container and run `docker compose up` again. It will wipe all cached directories and guarantee a clean build. If this happens multiple times, you may want to remove the argument `--incremental` temporarily from your local `Dockerfile`, at the cost of accepting longer compilation and reload times.

### Manual Installation
You can test and preview the wiki locally by setting up Jekyll and its plugins as follows:

1. Ensure you have [Ruby](https://www.ruby-lang.org/) 2.7.0 or higher installed by running `ruby --version`. (Avoid using `sudo` for the following commands to prevent permission issues.)
2. Install the bundler gem via `gem install bundler`. If you want to keep the dependencies in the local directory, please execute `bundle config set --local path 'vendor/bundle'` before running the next command.
3. In the project root (where the Gemfile is located), install all dependencies by executing `bundle install`.
4. Run the site locally: `bundle exec jekyll serve --livereload --incremental`.
5. Preview the local site at `http://localhost:4000`.

**Live Reload & Troubleshooting:** Just like the Docker setup, if you edit fundamental files (e.g. `references.bib`) or experience caching anomalies, you must wipe the cache before restarting the server. To force a clean state, stop the server and run:
```bash
bundle exec jekyll clean
bundle exec jekyll serve --livereload --incremental
```
If you experience this issue multiple times, you may consider removing the argument `--incremental` in step 4, at the cost of accepting longer compilation and reload times.

For more information, we refer to Jekyll's official [GitHub help page](https://help.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

## Bugs, Corrections, and Discussions

- **Visual/Website Bugs:** Please report visual presentation bugs or rendering issues via the [GitHub issue tracker](https://github.com/jnsiemer/latticeAssumptionZoo/issues).
- **Corrections and Additions:** If you find a mistake or want to provide a more comprehensive version of a text, please create a [pull request](https://github.com/jnsiemer/latticeAssumptionZoo/pulls). Please read our [Contribution Guidelines](CONTRIBUTING.md) for details on editorial cahnges.
- **Questions & Other Concerns:** For any other queries, please turn to the [GitHub discussion forum](https://github.com/jnsiemer/latticeAssumptionZoo/discussions) and start a constructive conversation.

## Dependencies

This website is built with [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes), a [Jekyll](https://jekyllrb.com/)-based theme. Jekyll itself is a [`gem`](https://github.com/ruby/rubygems)-based static-site generator written in [`Ruby`](https://www.ruby-lang.org/).

## License

This library is distributed under the [Mozilla Public License Version 2.0](LICENSE). Permissions of this weak copyleft license are conditioned on making the source code of licensed files and modifications of those files available under the same license (or in certain cases, under one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added to the larger work.
