# Hosting the Wiki Locally with Docker
This is a step-by-step guide to an editable copy of the Zoo running on your own machine:

1. [Install Docker](#1-install-docker)
2. [Confirm Docker is installed and running](#2-confirm-docker-is-installed-and-running)
3. [Fork and clone the repository](#3-fork-and-clone-the-repository)
4. [Run the wiki](#4-run-the-wiki)
5. [Make a change and watch it reload](#5-make-a-change-and-watch-it-reload)

If you want to avoid using Docker, see [Manual Installation](README.md#manual-installation), which requires installations of Ruby and Bundler.

---

## 1. Install Docker
There is no single installer that works across operating systems. So, we provide platform-specific instructions.

### Windows
Open the PowerShell and run:
```powershell
winget install -e --id Docker.DockerDesktop
```
Once Docker Desktop is installed, launch **Docker Desktop** from the Start menu, complete the first-run setup, and wait until it reports *"Docker Desktop is running."*

No `winget`, or prefer a GUI? Download the installer from [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) and run it.

**Notes:**
- Docker Desktop needs the WSL 2 backend. If prompted, open PowerShell *as Administrator* (right-click → *Run as administrator*), run `wsl --install`, and reboot.
- Virtualization (Intel VT-x / AMD-V) must be enabled in your BIOS/UEFI. This is the default setting of most computers.

### macOS
Open a Terminal and run:
```bash
brew install --cask docker-desktop
```
If you don't have Homebrew yet, install it first, then re-run the command above.
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Once installed, open Docker from Spotlight or Applications and grant the permissions it requests. Due to prior issues, ensure on MacOS that Docker Desktop can use enough resources under Settings → Resources (≥ 4 CPU cores, ≥ 4 GB Memory, ≥ 2 GB Swap, ≥ 5 GB disk space; higher values might be required based on other containers). Some setups struggle when installing `build-essentials` without enough resources!

No Homebrew, or prefer a GUI? Download the `.dmg` from [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) -- it's your responsibility to choose the appropriate build that matches your CPU. Check via the Apple menu → *About This Mac* → the *Chip* / *Processor* line. Ensure whether it's an Intel chip or an Apple Silicon CPU.

### Linux

#### Debian-/Ubuntu-Based Distros
We describe how to setup Docker Desktop, which has the following requirements: KVM virtualization (`/dev/kvm` accessible), a desktop environment (GNOME/KDE/MATE), and `systemd`. Note that Linux users can also use a more lightweight combination of Docker with its _Compose_ plugin. A brief installation guide is described below.

First, set up Docker's package repository (this example is for Ubuntu; for Debian, replace both `ubuntu` occurrences with `debian`):
```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

Then download the Docker Desktop `.deb` from the [official Linux install page](https://docs.docker.com/desktop/setup/install/linux/) (Fedora/RHEL use the `.rpm`, Arch uses AUR) and install it:
```bash
sudo apt-get install ./docker-desktop-amd64.deb
```

> At the end, apt prints a message like *"Download is performed unsandboxed as root … Permission denied."* **This is expected — ignore it.** The install still succeeds. Then launch **Docker Desktop** from your applications menu.


#### Arch Linux (and Arch-based Distros)
Docker maintains a Docker Desktop package on the AUR. With an AUR helper (`yay` or `paru`):
​```bash
yay -S docker-desktop
​```
Your helper will offer to remove the conflicting `docker-compose` and `docker-buildx` packages -- accept it. Then launch **Docker Desktop** from your application menu. On GNOME, install `gnome-shell-extension-appindicator` if you want the tray icon.

---
**Alternative: Docker Engine + Compose (leaner, no GUI, no KVM/desktop requirement).** If Docker Desktop won't start or you're on a headless machine, this is the low-friction route and is all this setup needs:
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```
Log out and back in (or reboot). Then, check the daemon with `sudo systemctl status docker`. The script is open source ([github.com/docker/docker-install](https://github.com/docker/docker-install)); review it first if you'd rather not pipe it into `sh`.

---

## 2. Confirm Docker is installed, running, and has enough resources
Two different checks -- run both:
```bash
docker --version
docker compose version
```
These confirm the CLI is installed. But they print even when the engine is stopped, so they don't tell you it's *running*. For that run:
```bash
docker info
```

- **Running:** prints a `Client:` and a `Server:` section full of details, and exits cleanly.
- **Not running:** prints something like `Cannot connect to the Docker daemon … Is the docker daemon running?`

If you get that error, start the engine: open **Docker Desktop** (Windows/macOS, or Linux Desktop), or if you went with Docker + Compose, run `sudo systemctl start docker`. Wait for it to report running, then re-run `docker info`. Continue.

**Important:** Ensure that Docker Desktop provides enough resources: Settings → Resources (≥ 4 CPU cores, ≥ 4 GB Memory, ≥ 2 GB Swap, ≥ 5 GB disk space; higher values might be required based on other containers). Some setups struggle when installing `build-essentials` without enough resources!

---

## 3. Fork and clone the repository

You'll work on **your own fork**, so you can push changes and open pull requests later without needing write access to the main repo. This section assumes that you have a Github account and `git` setup in your terminal.

**3a. Fork it.** Go to [github.com/jnsiemer/latticeAssumptionZoo](https://github.com/jnsiemer/latticeAssumptionZoo) and click **Fork** (top-right). This creates a copy under your Github account: `github.com/<your-username>/latticeAssumptionZoo`.

**3b. Clone your fork** Swap in your username and clone your project. The command below does this via HTTPS. You can also use SSH via a slightly different link (provided via the **Code** button in the top-right of your repository).
```bash
git clone https://github.com/<your-username>/latticeAssumptionZoo.git
cd latticeAssumptionZoo
```

---

## 4. Run the wiki

Navigate inside the project folder and run:
```bash
docker compose up
```

The first run builds the image (installs Ruby gems, compiles a few native extensions) and takes a few minutes. Subsequent runs are near-instant. When you see Jekyll report the server is ready, open:

**[http://localhost:4000](http://localhost:4000)**

To stop the server, press `Ctrl+C` in that terminal (or run `docker compose down` if you detached your console from the Docker container by hitting `d`).

---

## 5. Make a change and watch it reload
The container reloads the website live if you edit your local files, so you see your changes instantly:

1. Leave `docker compose up` running.
2. In your editor, open any content file, e.g. a page in `_assumptions/`, and change some text.
3. Save the file. You'll notice that the terminal shows Jekyll regenerating a page, and the browser tab at `localhost:4000` refreshes on its own within a second or two.

That's the whole loop: edit → save → see it live. When you're happy with a change, commit it to your fork and open a pull request against the main repository.

> **Note:** content files (`.md`, `.scss`, layouts, includes) live-reload. Changes to `_config.yml` or `references.bib` do **not**. Jekyll only reads it at startup. So stop (`Ctrl+C`) and re-run `docker compose up` after editing it to update the page if changes aren't displayed. This will give you a full rebuild.

---

## Troubleshooting
- **Any OS — `docker compose up` can't connect to the daemon:** The engine isn't running. Open Docker Desktop, wait until it's ready, and retry. Confirm with `docker info`.
- **Windows — "WSL 2 installation is incomplete":** Run `wsl --update` in an Administrator PowerShell, then restart.
- **Windows — Docker Desktop won't start:** Confirm virtualisation is enabled in BIOS/UEFI.
- **macOS — "Docker.app is damaged" or won't launch:** You likely installed the wrong build for your CPU. Uninstall and install the one matching your CPU.
- **Linux — apt error at the end of the Desktop install:** The *"Download is performed unsandboxed as root"* message is expected and harmless.
- **Linux — "permission denied" running `docker`:** You haven't logged out/in since being added to the `docker` group. Do so, or prefix commands with `sudo` as a one-off.

Please report any further issues via the [Github Issue Tracker](https://github.com/jnsiemer/latticeAssumptionZoo/issues).
