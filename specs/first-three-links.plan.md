# Test Plan: First Three Links of the Internet Herokuapp

## Application Overview

This test plan covers the first three links on https://the-internet.herokuapp.com/: A/B Testing, Add/Remove Elements, and Basic Auth. Each suite includes 1-2 test cases based on actual navigation and validation of page content and behaviors, including both positive and negative scenarios.

## Test Scenarios

### 1. A/B Testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. A/B Testing - Heading and Content Validation

**File:** `tests/abtest-happy.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/
    - expect: The home page loads successfully.
  2. Click the 'A/B Testing' link.
    - expect: The browser navigates to /abtest.
  3. Validate the heading on the page.
    - expect: The heading is either 'A/B Test Control' or 'A/B Test Variation 1'.
  4. Check for the presence of the explanatory paragraph.
    - expect: A paragraph explaining A/B testing is visible.

### 2. Add/Remove Elements

**Seed:** `tests/seed.spec.ts`

#### 2.1. Add/Remove Elements - Add Element

**File:** `tests/add-remove-happy.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/
    - expect: The home page loads successfully.
  2. Click the 'Add/Remove Elements' link.
    - expect: The browser navigates to /add_remove_elements/.
  3. Check for the presence of the 'Add Element' button.
    - expect: The 'Add Element' button is visible.
  4. Click the 'Add Element' button.
    - expect: A 'Delete' button appears below.

#### 2.2. Add/Remove Elements - Remove Element

**File:** `tests/add-remove-negative.spec.ts`

**Steps:**
  1. Ensure at least one 'Delete' button is present (add if necessary).
    - expect: A 'Delete' button is visible.
  2. Click the 'Delete' button.
    - expect: The 'Delete' button disappears from the page.

### 3. Basic Auth

**Seed:** `tests/seed.spec.ts`

#### 3.1. Basic Auth - Successful Authentication

**File:** `tests/basicauth-success.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/basic_auth with credentials 'admin'/'admin'.
    - expect: The page loads and displays a success message indicating authentication was successful.

#### 3.2. Basic Auth - Failed Authentication

**File:** `tests/basicauth-failure.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/basic_auth with invalid credentials.
    - expect: The browser shows an authentication error or access is denied.
