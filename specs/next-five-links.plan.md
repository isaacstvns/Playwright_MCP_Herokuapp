# Test Plan: Next Five Links of the Internet Herokuapp

## Application Overview

This test plan covers the next five links on https://the-internet.herokuapp.com/: Broken Images, Challenging DOM, Checkboxes, Context Menu, and Digest Authentication. Each suite includes 1-2 test cases based on actual navigation and validation of page content and behaviors, including both positive and negative scenarios.

## Test Scenarios

### 1. Broken Images

**Seed:** `tests/seed.spec.ts`

#### 1.1. Validate All Images Load

**File:** `tests/broken-images.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/
    - expect: The home page loads successfully.
  2. Click the 'Broken Images' link.
    - expect: The browser navigates to /broken_images.
  3. Check that all images are present on the page.
    - expect: All images are rendered in the DOM.
  4. Validate that at least one image fails to load (broken).
    - expect: At least one image is broken (does not load).

#### 1.2. Validate Image Alt Text

**File:** `tests/broken-images.spec.ts`

**Steps:**
  1. On the 'Broken Images' page, check that all images have alt attributes.
    - expect: All images have alt text for accessibility.

### 2. Challenging DOM

**Seed:** `tests/seed.spec.ts`

#### 2.1. Validate Table Presence

**File:** `tests/challenging-dom.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/
    - expect: The home page loads successfully.
  2. Click the 'Challenging DOM' link.
    - expect: The browser navigates to /challenging_dom.
  3. Check that the table is present and visible.
    - expect: Table is displayed.

#### 2.2. Validate Button Actions

**File:** `tests/challenging-dom.spec.ts`

**Steps:**
  1. On the 'Challenging DOM' page, click each of the colored buttons (blue, red, green).
    - expect: No errors occur; page remains functional.

### 3. Checkboxes

**Seed:** `tests/seed.spec.ts`

#### 3.1. Toggle Checkboxes

**File:** `tests/checkboxes.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/
    - expect: The home page loads successfully.
  2. Click the 'Checkboxes' link.
    - expect: The browser navigates to /checkboxes.
  3. Toggle each checkbox (check/uncheck).
    - expect: Checkboxes can be checked and unchecked.

### 4. Context Menu

**Seed:** `tests/seed.spec.ts`

#### 4.1. Right-Click Context Menu

**File:** `tests/context-menu.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/
    - expect: The home page loads successfully.
  2. Click the 'Context Menu' link.
    - expect: The browser navigates to /context_menu.
  3. Right-click on the hotspot area.
    - expect: Alert with context menu message is shown.

#### 4.2. Dismiss Context Menu

**File:** `tests/context-menu.spec.ts`

**Steps:**
  1. Dismiss the alert.
    - expect: Page is still usable after dismissing the alert.

### 5. Digest Authentication

**Seed:** `tests/seed.spec.ts`

#### 5.1. Successful Digest Auth

**File:** `tests/digest-auth.spec.ts`

**Steps:**
  1. Navigate to /digest_auth with credentials 'admin'/'admin'.
    - expect: Authenticated and success message shown.

#### 5.2. Failed Digest Auth

**File:** `tests/digest-auth.spec.ts`

**Steps:**
  1. Navigate to /digest_auth with invalid credentials.
    - expect: Authentication fails; no success message.
