# University GPA Calculator Implementation Guide

## Overview
You now have complete implementations for:
- ✅ UC Berkeley (`uc-berkeley-gpa-calculator`)
- ✅ UCLA (`ucla-gpa-calculator`)
- ⏳ University of Michigan (component created, page template below)
- ⏳ Remaining 7 universities

## Quick Implementation Steps for Each University

### Step 1: Create Calculator Component
File: `/src/components/{UniversityName}GPACalculator.tsx`

Copy the structure from `UCBerkeleyGPACalculator.tsx` and customize:
- Change university name in comments
- Adjust placeholder examples (e.g., "Physics 7A" → "Engineering 101")
- Modify GPA interpretation at the bottom based on university standards
- File naming convention: `UniversityNameGPACalculator.tsx` (camelCase)

**Example universities and their sample courses:**

1. **University of Michigan** → "Engineering 100", "Chemistry 210"
2. **NYU** → "Linear Algebra", "General Chemistry"
3. **Boston University** → "CAS 108", "ENG 101"
4. **USC** → "GE-MA", "Chemistry 101"
5. **Georgia Tech** → "CS 1000", "MATH 1551"
6. **Carnegie Mellon** → "CS 110", "MATH 121"
7. **Purdue** → "MA 161", "CHM 115"
8. **University of Washington** → "AMATH 100", "CHEM 142"

### Step 2: Create Page Component
File: `/src/app/gpa-calculators/{id}/page.tsx`

**Template structure (customize for each university):**

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';
import {UniversityNameGPACalculator} from '@/components/{UniversityName}GPACalculator';
import RelatedCalculators from '@/components/RelatedCalculators';
import Breadcrumb from '@/components/Breadcrumb';
import AdUnit from '@/components/AdUnit';
import FAQ from '@/components/FAQ';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: '[University Name] GPA Calculator – Calculate Your GPA',
  description: '[University Name] GPA Calculator - Calculate your cumulative GPA...',
  keywords: '[university] GPA calculator, calculate [university] GPA, [university name] grading scale',
  openGraph: {
    title: '[University Name] GPA Calculator',
    description: 'Calculate your GPA at [University Name].',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/[slug]',
  },
};

// ... Rest of page structure
```

**Key sections to include:**
1. Meta tags (title, description, keywords)
2. Table of Contents with internal links
3. Calculator component
4. University GPA System explanation (800-900 words)
5. Grading scale table
6. GPA formula explanation
7. Real calculation example
8. Admission GPA requirements
9. Tips to improve GPA
10. FAQ section (6-8 questions)
11. CTA section
12. External resource links

### Step 3: Update calculators.ts
File: `/src/data/calculators.ts`

Add entry (if not already present):
```typescript
{
  id: '[university-gpa-calculator]',
  name: '[University Name] GPA Calculator',
  title: '[University Name] GPA Calculator – Calculate Your GPA',
  metaDescription: 'Calculate your GPA at [University Name] with our accurate calculator...',
  h1: '[University Name] GPA Calculator',
  h2: '[University Name] GPA Tool',
  description: 'Our [University Name] GPA Calculator helps students calculate their cumulative GPA...',
  targetAudience: '[University Name] Students',
  relatedCalculators: ['uc-berkeley-gpa-calculator', 'ucla-gpa-calculator', 'college-gpa-calculator', 'weighted-gpa-calculator'],
}
```

## Remaining Universities to Complete

### Priority Order:
1. **University of Michigan** (UM)
   - Slug: `university-of-michigan-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.9+
   - Scale: 4.0
   - Credits: Typically 3-4

2. **NYU (New York University)**
   - Slug: `new-york-university-gpa-calculator` or `nyu-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.8+
   - Scale: 4.0
   - Multiple schools (CAS, Stern, Tisch, etc.)

3. **Boston University**
   - Slug: `boston-university-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.6+
   - Scale: 4.0

4. **USC (University of Southern California)**
   - Slug: `usc-gpa-calculator` or `university-of-southern-california-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.9+
   - Scale: 4.0

5. **Georgia Tech**
   - Slug: `georgia-tech-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.9+
   - Scale: 4.0

6. **Carnegie Mellon University**
   - Slug: `carnegie-mellon-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.9+
   - Scale: 4.0

7. **Purdue University**
   - Slug: `purdue-gpa-calculator`
   - Min GPA: 1.6-2.0 (varies by college)
   - Average admitted: 3.6+
   - Scale: 4.0

8. **University of Washington**
   - Slug: `university-of-washington-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.7+
   - Scale: 4.0

9. **University of Florida**
   - Slug: `university-of-florida-gpa-calculator`
   - Min GPA: 2.0
   - Average admitted: 3.9+
   - Scale: 4.0

10. **University of Texas at Austin**
    - Slug: `university-of-texas-gpa-calculator`
    - Min GPA: 2.0
    - Average admitted: 3.8+
    - Scale: 4.0

## Content Tips for Each University

### Unique Content Points to Research:
1. **Grading policies** - Plus/minus systems, S/U grading availability
2. **Admission statistics** - Average GPA range from official admissions data
3. **GPA recalculation** - Do they recalculate for transfers?
4. **Academic standing** - What happens at different GPA thresholds?
5. **School-specific policies** - Multiple schools within university (e.g., NYU Stern vs CAS)
6. **Course units** - Are they 3, 4, or variable units?
7. **Grade distribution** - Any curves or adjustments?

### FAQ Template (Customize for each university):
```
1. What is [University]'s GPA scale?
2. What GPA do I need to get into [University]?
3. How many credits are [University] courses worth?
4. Does [University] use weighted GPA?
5. Is a 3.X GPA good at [University]?
6. What happens if I fall below 2.0 at [University]?
7. Can I retake courses at [University]?
8. How does [University] calculate transfer GPA?
```

## Files Already Created

✅ **UC Berkeley**
- Component: `/src/components/UCBerkeleyGPACalculator.tsx`
- Page: `/src/app/gpa-calculators/uc-berkeley-gpa-calculator/page.tsx`

✅ **UCLA**
- Component: `/src/components/UCLAGPACalculator.tsx`
- Page: `/src/app/gpa-calculators/ucla-gpa-calculator/page.tsx`

✅ **University of Michigan** (Component only)
- Component: `/src/components/UniversityOfMichiganGPACalculator.tsx`
- Page: NEEDS TO BE CREATED

## Next Steps

1. **Complete Michigan** - Create the page file using the UCLA page as template
2. **Create 8 more universities** - Follow the template above
3. **Test the build** - Run `npm run build` to ensure no TypeScript errors
4. **Verify routes** - Check that all `/gpa-calculators/[slug]` routes work
5. **Update main index** - Ensure all calculators appear in the GPA Calculator hub page

## Verification Checklist

For each new university page, verify:
- [ ] Component file created and exported correctly
- [ ] Page file created in correct folder
- [ ] calculators.ts entry added
- [ ] Page imports calculator component
- [ ] Meta tags are unique and SEO-optimized
- [ ] Table of Contents with proper anchor links
- [ ] Grading scale table matches university's official scale
- [ ] At least one real-world calculation example
- [ ] Admission GPA requirements from official sources
- [ ] 6-8 unique FAQ questions
- [ ] External links point to official university pages
- [ ] Related calculators linked appropriately
- [ ] AdUnit component included
- [ ] Schema markup JSON-LD included
- [ ] Build passes: `npm run build`

## Build & Deploy Commands

```bash
# Test build
npm run build

# If errors occur
npm run lint:fix

# If need to clean
rm -rf .next
npm run build
```

## Common Issues & Solutions

### Issue: "Cannot find module '@/components/[Name]GPACalculator'"
**Solution**: Ensure component file is created and properly exported as default export

### Issue: "Type error: 'Calculator' is declared but never used"
**Solution**: Add `<AdUnit />` or use the calculator component in the JSX

### Issue: Build fails with "Invalid path"
**Solution**: Check that folder structure is lowercase with hyphens: `/uc-berkeley-gpa-calculator/`

---

## University-Specific GPA Data Reference

| University | Min GPA | Avg Admitted | Scale | Units | Key Courses |
|------------|---------|-------------|-------|-------|------------|
| UC Berkeley | 2.0 | 3.89-4.0 | 4.0 | 4 | Physics 7A, Chem 1A |
| UCLA | 2.0 | 3.88-4.0 | 4.0 | 4 | Life Sci 1, Physics 1A |
| Michigan | 2.0 | 3.9+ | 4.0 | 3-4 | Eng 100, Chem 210 |
| NYU | 2.0 | 3.8+ | 4.0 | 3-4 | Varies by school |
| Boston U | 2.0 | 3.6+ | 4.0 | 4 | BU101, Core courses |
| USC | 2.0 | 3.9+ | 4.0 | 4 | GE-MA courses |
| Georgia Tech | 2.0 | 3.9+ | 4.0 | 3-4 | CS 1000, MATH courses |
| Carnegie Mellon | 2.0 | 3.9+ | 4.0 | 9-12 | CS courses prominent |
| Purdue | 1.6-2.0 | 3.6+ | 4.0 | 3-5 | MA 161, CHM 115 |
| UW | 2.0 | 3.7+ | 4.0 | 4-5 | CHEM 142, AMATH 100 |
