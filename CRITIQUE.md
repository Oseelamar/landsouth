# Land South Properties and Management — homepage critique

Reviewed 16 Nov 2026 at 1440px desktop and 390px mobile.

## The core problem

The homepage doesn't decide who it's for. Property owners are the people who bring in revenue, but the first thing under the hero is four sage tiles for current tenants: Pay Rent, Properties, Management and Tenant Documents. An owner comparing managers in Lakeland has to scroll past resident chores before learning what Land South does, how long it has done it, or why it's better. Residents need fast access, but that belongs in a utility bar, not in the main pitch.

## What's working

- The stock of real proof is strong: family-owned since 1978, 700+ properties, a named team, NARPM membership, a broker on record, and 10 Polk County towns with their own pages.
- The blog is active and local, with four posts in the last three weeks on Polk County rents, evictions and leases. That's real SEO equity.
- The phone number and a consultation booking link are visible at the top.

## Issues, by severity

### Credibility (fix first)

1. **The numbers disagree with each other.** The page says "30+ years" in one section, "since 1978" (48 years) in the next, and "45 Years In Business" in the stats band. A prospective owner will notice, and it undercuts the strongest selling point.
2. **The stats render as "0".** The counters only animate with JavaScript once they scroll into view. Crawlers, link previews and the page text read "Properties Under Management 0+" and "Years In Business 0".
3. **Text is clipped at desktop widths.** In "A team that cares", the paragraph runs off the right edge at 1440px ("manage, buy, and…" is cut).
4. **Polish errors.** The footer says "Fork Meade" for Fort Meade, and Polk County is missing from the footer list. The About page still shows "Lorem ipsum" under the team.
5. **Testimonials are thin.** There are only two, both labelled "Happy Customer", and one is actually a vendor. There's no star rating, review count or link to Google reviews, even though a review QR code sits in the footer.

### Conversion

6. **The headline is generic.** "Property management made simple" could belong to any company in any city. The subhead ends in an exclamation mark and repeats the company name.
7. **The main offer has no form.** "Get a Free Rental Analysis" is the only owner call to action, but it links to another page. Asking for the property address right in the hero would start the conversation immediately.
8. **There are too many competing calls to action.** The page has eight green buttons, all the same weight: Contact Us, Free Rental Analysis, View All Services, More About Us, Contact Us to Get Started, View All Blogs, Book a Consultation, and Pay Now. None of them stands out.
9. **There's no "how it works".** Owners switching managers want to know what happens after they call: the analysis, onboarding, and when the first rent arrives.
10. **The team is invisible.** "A team that cares" uses a stock photo of a couple holding keys. The real team (Meghan West, Chelsey, Erika, Frank…) is only on the About page, yet a vendor review names Chelsey and Michele.

### Design

11. **It looks like a template.** Montserrat everywhere, sage boxes with white icon squares, centred text and stock photos make it look like hundreds of other property-manager sites. Nothing here says Lakeland or a family business started in 1978.
12. **The hierarchy is weak.** Section headers jump between light and heavy weights ("30+ years…" is light, "A team that cares" is black). The eyebrow labels are pale sage on white and barely readable.
13. **The areas section is wasted space.** Ten towns sit in a single narrow list off to the right of centre, with the first four bold and the rest not, and a big empty area to the left. It's the page's best local-SEO asset, presented as an afterthought.
14. **The blog grid leaves an orphan.** Four posts in a 3-column grid leave one card alone on the second row.
15. **The footer has low contrast.** It uses light grey text on sage. A QR code is useless on a desktop screen.

### Mobile

16. On a phone, the four tenant tiles take up about 1.5 screens before any owner content. The hero text is cramped over a busy photo, and the top bar takes two lines of the first screen.

## The redesign

The prototype keeps every section of the current homepage, in the same order and with the same facts. On top of that, it adds the fixes the critique calls for: a sharper headline, a "How switching works" section, the real team, a full analysis form, fewer buttons and a resident shortcuts bar. Copy that is new rather than reworded is marked "proposed" in the source so the client can approve it.

### Look and feel

- **Palette:** deep forest and olive green, warm cream and sand, the existing brand sage, and a soft lime for the main actions.
- **Type:**
  - Headings use Nanum Myeongjo, a serif, in sentence case with tight letter-spacing.
  - Buttons, navigation and labels use Season Sans Bold at 12px, all caps, with 7% letter-spacing.
  - Body text uses Manrope.
- **Rules:** no italics and no carousels. Headings rise in line by line as you scroll, and everything else fades up gently.

### Section by section

1. **Hero:**
   - A floating white navigation bar over open sky, above their own house photo.
   - The headline, "Lakeland's family-run property managers since 1978.", is set large and bold on exactly three lines. It is marked as proposed in the source; the old line was "Property management made simple."
   - An address box with "Get a free rental analysis", which carries the address down into the full form at the end of the page.
   - A slim "For residents" bar along the bottom edge with Pay rent online, Available properties, Tenant documents and Maintenance request, so owners get the pitch first.
2. **Services:** the "Serving Lakeland property owners since 1978" intro, then Marketing, Screening & selection, Maintenance & inspections and Tenant move-out. Each is a full-screen panel that slides up over the one before, with its own paper-collage illustration in the brand greens.
3. **How switching works:** a proposed new section in dark green. As it settles into view, the page fades from cream to the footer green, the way the AdLib prototype changes colour. A house line drawing then builds in three stages as you scroll, one per step: walls for the free rental analysis; roof, door and chimney for onboarding; lit windows and chimney smoke for the first rent paid. The step text changes alongside, ending on the lime button to the analysis form.
4. **A team that cares:** all eight people from the About page as cut-out portraits, showing only name and role. Each portrait is monochrome until you hover over it, or until it reaches the middle of the screen on a phone. It then turns to full colour, and a brand-colour accent appears behind it: a lime or sage shape, a paper note, a check badge or an arrow. Below that are their lead paragraph and the "What you can expect" chips.
5. **Key figures:** 700+ properties under management, 48 years in business (matching "since 1978") and 10 communities served, as large plain-text numbers.
6. **Areas we serve:** all 10 towns as large pills, each linking to its own page.
7. **We love our customers:** both real reviews, labelled Resident and Vendor. The vendor review keeps its original mention of Chelsey and Michele, who now appear in the team section. A "Read our Google reviews" link sits underneath.
8. **Blog:** the three newest posts with dates, in a full row with no orphaned card.
9. **Proud managers of:** Grasslands West and South Lakeland Boat & RV Storage.
10. **Free rental analysis:** a dark green band with a full form (name, phone, email and property address) beside the consultation offer, the Calendly link and the phone number. In the prototype, submitting shows a thank-you message.
11. **Footer:** readable light-on-green text, the corrected town list, a "Leave a review" link in place of the QR code, and a large "Land South" wordmark.

### Calls to action

Buttons are kept for the main actions only:
- Contact us in the navigation bar.
- The hero analysis box.
- Start with a free rental analysis.
- The form's submit button.

Everything secondary is an underlined text link: View all services, More about us, Contact us to get started, Read our Google reviews, View all blogs, Book a 30-minute call and Leave a review.

### How the critique is addressed

| # | Issue | Status |
|---|---|---|
| 1 | Numbers disagree | Fixed. "30+ years" is removed, and the stat reads 48 years to match "since 1978". The client should confirm it. |
| 2 | Stats show "0" | Fixed. They are plain text. |
| 3 | Clipped text | Fixed at every width. |
| 4 | Polish errors | Fixed on the homepage. The About page's Lorem ipsum is outside this scope. |
| 5 | Thin testimonials | Fixed as far as possible without new data. The labels are corrected, the vendor review names the team, and there's a Google reviews link. A star rating needs the client's real figures. |
| 6 | Generic headline | Fixed with a proposed line about Lakeland, family-run and 1978. |
| 7 | No form for the main offer | Fixed. The hero box feeds a full analysis form at the end of the page. It still needs connecting to the client's inbox. |
| 8 | Competing calls to action | Fixed. There are four buttons, and everything else is a text link. |
| 9 | No "how it works" | Fixed with a proposed three-step "How switching works" section. |
| 10 | Invisible team | Fixed. All eight staff appear with their real headshots, names and roles. |
| 11 | Template look | Fixed. |
| 12 | Weak hierarchy | Fixed. All headings share one style, and the labels are readable. |
| 13 | Wasted areas section | Fixed. |
| 14 | Orphaned blog card | Fixed. |
| 15 | Low-contrast footer | Fixed. |
| 16 | Mobile issues | Fixed. The resident links are a compact bar, the hero text sits on sky, and the top bar is one line. |

### Needed from the client

- Confirmation of 48 years in business.
- Approval of the proposed copy: the headline and the "How switching works" section.
- Their Google review rating and count.
- Where analysis form submissions should go.
- Their real social profile links. The footer icons are placeholders.
- A licence for Season Sans before launch. The prototype uses the trial font.
