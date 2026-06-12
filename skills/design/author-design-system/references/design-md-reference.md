# Google DESIGN.md Reference

Use this reference when creating, updating, migrating, or linting a
Google-spec `DESIGN.md`.

Canonical source:

```text
https://github.com/google-labs-code/design.md
https://github.com/google-labs-code/design.md/blob/main/docs/spec.md
```

The format is alpha. When current spec details matter and internet access is
available, prefer the official spec over this summary.

## Core Shape

`DESIGN.md` is a plain-text visual identity contract with two parts:

- optional YAML frontmatter containing machine-readable design tokens
- markdown body containing human-readable rationale and application guidance

Tokens are normative. Prose explains why the values exist and how to apply them.

Default frontmatter token groups:

```yaml
---
version: alpha
name: Product Or System Name
description: One-line visual-system purpose.
colors:
  primary: "#1A1C1E"
typography:
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
---
```

## Canonical Section Order

Sections may be omitted when not relevant, but included canonical sections
should appear in this order:

1. `## Overview` or `## Brand & Style`
2. `## Colors`
3. `## Typography`
4. `## Layout` or `## Layout & Spacing`
5. `## Elevation & Depth` or `## Elevation`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

Use custom sections such as `## Source Inputs`, `## Open Questions`, and
`## Changelog` after canonical sections. Consumers should preserve unknown
section headings, but duplicate section headings are errors.

## Token Guidance

### Colors

Color values may be valid CSS color strings. Hex `#RRGGBB` is the recommended
default for simplicity and broad tooling support. Colors are converted to sRGB
for WCAG contrast checking.

Prefer semantic role tokens for product UI decisions:

```yaml
colors:
  surface: "#FFFFFF"
  surface-muted: "#F5F2EC"
  text-primary: "#171717"
  text-muted: "#62615C"
  action-primary: "#1F4E79"
  border-subtle: "#DED8CC"
  error: "#B42318"
```

Use palette/ramp tokens only when the repo already uses them or theme logic
needs them:

```yaml
colors:
  blue-600: "#1F4E79"
  blue-700: "#173D60"
```

### Typography

Typography tokens are maps of named roles to font properties. Common role names
include `headline-display`, `headline-lg`, `body-md`, and `label-sm`.

Supported fields include:

- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`
- `fontFeature`
- `fontVariation`

Use exact values where brand, readability, density, or implementation depends on
them. Use semantic platform references in prose when native platform defaults
are the source of truth.

### Spacing And Rounded

`spacing` values may be dimensions or useful layout units. `rounded` values
define radius tokens for shapes such as buttons, cards, and inputs.

Keep scales constrained. Avoid one-off values unless the design needs a named
exception.

### Components

The `components` group maps component identifiers to property tokens. Values may
be literals or token references.

Common component properties:

- `backgroundColor`
- `textColor`
- `typography`
- `rounded`
- `padding`
- `size`
- `height`
- `width`

State variants may be separate related component keys:

```yaml
components:
  button-primary:
    backgroundColor: "{colors.action-primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "#173D60"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
```

Unknown component properties are accepted with warnings, so prefer canonical
property names unless the repo already has a compatible custom convention.

## References

References use `{path.to.token}` syntax.

For most token groups, references should point to primitive values:

```yaml
components:
  card:
    rounded: "{rounded.lg}"
```

Inside `components`, references to composite typography values are permitted:

```yaml
components:
  button-primary:
    typography: "{typography.label-md}"
```

## Elevation, Motion, And Iconography

`Elevation & Depth` is a canonical markdown section. There is no canonical
frontmatter `elevation` token group in the current spec.

Motion and iconography are not canonical token groups or required sections in
the current spec. Use prose or component-scoped guidance unless the repo already
has compatible custom token conventions.

## Unknown Content

Spec consumers should preserve unknown section headings and accept valid unknown
token names. Duplicate section headings are errors. Unknown component properties
may produce warnings.

This means custom sections can exist, but canonical sections and token groups
should carry the main contract when the file is intended to lint cleanly.

## Lint Commands

Preferred:

```bash
npx @google/design.md lint DESIGN.md
```

Windows-friendly alias:

```bash
npx designmd lint DESIGN.md
```

The CLI also supports export and diff workflows in current releases, but this
skill only requires linting for authoring verification.

## Manual Self-Check

Use when lint cannot run:

- Frontmatter starts and ends with exact `---` delimiters.
- Token groups use valid YAML maps.
- Color values are valid CSS color strings.
- Typography dimensions use supported units such as `px`, `em`, or `rem`, or
  unitless `lineHeight`.
- Token references resolve to existing paths.
- Canonical sections are ordered correctly.
- No duplicate canonical headings exist.
- Custom sections appear after canonical sections.
- Components contain reusable visual rules, not feature-specific UX behavior.
- Do's and Don'ts include contrast, color usage, typography, spacing, and
  component guardrails that downstream agents can apply.
