---
title: Fake Title 1
date: 2024-02-12
image:
  src: ../../assets/image.jpg
  alt: Katie Haus
---

import { Image } from "astro:assets";
import Katie from "../assets/image.jpg";

hi from _Markdown_

![Katie Haus](../../assets/image.jpg)

<Image src={Katie} alt="Katie Haus" width={500} />

![Katie Haus](/image.jpg)

<Image src="/image.jpg" width={500} height={500} alt="Katie Haus" width={500} />

![graphic for web stuff](https://astro.build/_vercel/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdev-portal-bucket%2Fycs425ef1srid3lsg3dt15lqwcaf64yvrxlaid.webp&w=640&q=100)

<Image
  src="https://astro.build/_astro/content-focused.VdVRy80q.webp"
  width={500}
  height={500}
  alt="Katie Haus"
/>
