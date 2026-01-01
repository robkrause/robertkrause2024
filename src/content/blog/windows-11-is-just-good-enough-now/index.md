---
title: "Windows 11 is just good enough now (in the EU)"
description: "Want to feel good about upgrading to Windows 11? – Say no more!"
date: "Sept 28 2025"
---

Want to feel good about upgrading to Windows 11? – Say no more!

---

1. Clean Windows Install
2. App Recommendation
3. pcgamingwiki.com

## Clean Windows Install

Let me start by saying that I still don’t like the path that Microsoft currently is on. An operating system especially must fulfill the foundational needs of the user. Nobody wants things like Copilot, Recall and other bloatware everywhere in Windows. But there are shimmers of light in there, e.g. a nice design with a mostly consistent dark theme, Markdown support in Notepad, and even Rust in the Kernel. If only there was no bloat.

Thankfully there is a solution, and the European Union is responsible – by implementing the Digital Markets Act. While there are interesting ways to have a slimmed down Windows installation, like LTSC, [unattended installs](https://schneegans.de/windows/unattend-generator/) and debloat scripts like [Winutil](https://github.com/ChrisTitusTech/winutil) or [Win11Debloat](https://github.com/Raphire/Win11Debloat), I want to focus on a way that won’t break anything in the future with updates. I won’t describe every step in detail but focus on the main steps:

1. Create an Installation Stick that contains Windows11 25H2
2. Optional: Install with local account: After setting the Region to an EU country, you can skip the login with an Microsoft Account [like so](https://x.com/witherornot1337/status/1906050664741937328)
3. Once the installation is done and the remaining Windows Updates are finished, you can uninstall most unwanted applications, even Copilot, Edge and Store. A few apps are tagged as system apps and can be forcefully uninstalled but might break things and often return with an update
4. Disable Bing from Windows search because you are anyways looking for files: Settings => Privacy and Security => Web search => Off
5. Disable MSN Trash News in the Widgets: Open Widgets => Settings => Show or hide feeds => Microsoft Start => Off. You could also hide it altogether in the taskbar settings, together with the search bar
6. [A few other tweaks](https://www.windowscentral.com/microsoft/windows-11/my-top-21-ways-to-improve-windows-11-to-increase-gaming-performance-without-hardware-upgrade) - pick yourself

## App Recommendation

While I mostly play games on my PC, I still have some productivity apps in place. How I set up all of them: [winget](https://learn.microsoft.com/de-de/windows/package-manager/winget/#use-winget). If you prefer a user interface, there is [UniGetUI](https://github.com/marticliment/UniGetUI)

- Anti-Virus: It’s 2025, you don’t need any 3rd party applications, Windows Defender does the job
- Browser: Up until recently I used Brave in combination with [SlimBrave](https://github.com/ltx0101/SlimBrave). But now there is [Helium](https://helium.computer/) and it is perfect
- Email: Thunderbird is heavy, but it gets the job done without any hiccups. I hide all unwanted features like calendar and only wish that something like [fluentbird](https://github.com/Deathbyteacup/fluentbird) would come out of the box
- Office: I already described [here](https://robertkrau.se/blog/clean-windows-10-install/) how to install only the Microsoft Office apps that you really want.
- Theme Switch: Just use [Windows-Auto-Night-Mode](https://github.com/AutoDarkMode/Windows-Auto-Night-Mode) and don't ask why Windows does not have that as a native feature – there can't be a sane reason

## [pcgamingwiki.com](https://www.pcgamingwiki.com/)

Basically, I just want to share this awesome site that provides detailed resources of how to best run any PC game.
