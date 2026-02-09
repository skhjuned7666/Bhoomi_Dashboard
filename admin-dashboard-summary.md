# Bhoomi Plots & Land – Admin Dashboard Summary

## 1. High-level Modules (Sections)

1. Property / Listing Management  
2. Homepage & Landing Content Management  
3. Locations & Projects Master Data  
4. Leads / Enquiries Management  
5. Users (Buyers) & Roles (Admins / Sales)  
6. Contact / Support Queries  
7. Blog / SEO Content  
8. Analytics / Overview Dashboard  
9. Global Settings (Configs, Masters)

---

## 2. Property / Listing Management

**Purpose**: Saare properties / plots / projects ke individual listings yahi se create, update, delete, publish honge.

### 2.1. Basic Property Fields

- **Property ID** (auto-generated)  
- **Title / Headline**
  - Example: “2 BHK Flats in Bavdhan, Pune”  
- **Property Type**
  - Apartment, Villa, Independent House, Plot/Land, Commercial, Farmhouse, etc.  
- **Listing Category / Tag**
  - Normal, Featured, High Demand, New Launch, Exclusive, etc.  
- **Status**
  - Draft, Active, Upcoming, Sold Out, On Hold, Archived  

### 2.2. Pricing & Area Details

- **Price Type**
  - Single Price, Price Range  
- **Price / Price Range**
  - Example: `₹ 45L – 75L` ya `₹ 1.05 Cr`  
- **Price per Unit (optional)**
  - e.g. ₹ per sqft / per sq. yard / per acre  
- **Area Details**
  - Built-up area (sqft)
  - Carpet area (optional)
  - Plot area (for plots / land)  
- **Configuration**
  - BHK (1, 2, 3, 4+)
  - Bedrooms count
  - Bathrooms count
  - Parking availability (Yes/No + count)

### 2.3. Location Details

- **Country** (default: India)  
- **State** (e.g. Maharashtra, Karnataka)  
- **City** (e.g. Pune, Mumbai, Bangalore)  
- **Locality / Area**
  - e.g. Hinjewadi, Baner, Kharadi, Bavdhan  
- **Full Address (line)**
  - Street + Landmark + Pincode  
- **Geo Location (optional but useful)**
  - Latitude, Longitude  
- **Map Link (optional)**
  - Google Maps URL

### 2.4. Media & Badges

- **Primary Image (cover)**  
- **Image Gallery**
  - Multiple images upload  
- **Video URL**
  - YouTube/Vimeo/Hosted video link  
- **Badges / Labels (toggle fields)**
  - RERA Approved (Yes/No + RERA ID)
  - Verified Property (Yes/No)
  - Award / Trusted (Yes/No)
  - Video Available (Yes/No – auto from video URL)
- **Display Priority**
  - Sort order / priority number (higher = show earlier)

### 2.5. Project & Builder Info

- **Project Name** (link to Projects master, optional)  
- **Builder / Developer Name**  
- **RERA Registration ID**  
- **Project Type**
  - Township, NA Plots, Gated Community, etc.  
- **Short Description**
  - 1–2 line summary  
- **Detailed Description**
  - Rich text: highlights, USPs, etc.  
- **Key Highlights (bullets)**
  - e.g. “Gated community with 24x7 security”
  - “Close to schools, hospitals and metro”
  - “Ready-to-move-in, vastu friendly layout”

### 2.6. Amenities & Features

- **Amenities (multi-select)**  
  - Clubhouse, Swimming Pool, Gym, Garden, Kids Play Area, Parking, Security, Power Backup, Lift, etc.  
- **Property Features**
  - Floor number, total floors
  - Facing (East, West, etc.)
  - Furnishing (Unfurnished, Semi, Fully)
  - Age of property (if resale)

### 2.7. Visibility & Linking

- **Show on Homepage?** (Yes/No)  
- **Show in “Homes You May Like in X City”?** (Yes/No or using rule)  
- **Show in “High Demand Apartments in X City”?** (Yes/No or using tag)  
- **URL Slug** (auto or manual, SEO-friendly)  
- **Meta Title / Meta Description** (SEO for property page)

---

## 3. Homepage & Landing Content Management

**Purpose**: Jo cheezein abhi HTML me hard-coded hain (headings, sections, cards), unko admin se manage karna.

### 3.1. Hero Section Config

- **Main Headline Text**
  - e.g. “Find a new home in India while you stay-at-home”  
- **Highlighted City / Word**
  - e.g. “India”, future me changeable  
- **Search Tabs (Buy / New Launch / Commercial / Plots/Land / Projects)**
  - List of tabs:
    - Tab name
    - Internal type key (for filter)
    - Active/Inactive toggle
    - Sort order  
- **Search Category Dropdown Options**
  - All Residential, Residential Apartment, Independent House/Villa, Plots/Land, Commercial
  - Each ke liye:
    - Label
    - Filter key / URL parameter  
- **Search Placeholder Text**
  - e.g. `"Search 'PG in sector 74 noida'"`

### 3.2. Popular Category Cards (Apartments / Villas / Plots / Commercial / Farmhouses)

Each card ke liye:

- Title (e.g. Apartments, Luxury Villas, Plots & Land)  
- Image URL  
- Category / filter mapping (search params)  
- Click destination:
  - Search results with filters
  - Or static landing page  
- Active/Inactive toggle  
- Sort order

### 3.3. “Homes You May Like in <City>” Section

- Section title text
  - e.g. “Homes You May Like in Pune”  
- City Name (variable)  
- Selection strategy:
  - Manual selection (admin chooses specific properties)
  - OR rule-based:
    - City = X
    - Tag = Featured / Recommended  
- Max items to show (e.g. 4, 8)

### 3.4. “High Demand Apartments in <City>” Section

- Section title text
  - e.g. “High Demand Apartments in Pune”  
- City filter  
- Cards mapping:
  - Either direct properties
  - Or “Project cards” with:
    - Project name
    - Price range (text)
    - Primary image
    - City + locality
    - Optional: linked project ID  

---

## 4. Locations & Projects Master Data

### 4.1. Locations Master

- **City list**
  - City name
  - State
  - Active (Yes/No)
  - Show on homepage (Yes/No)
  - Priority / sort  
- **Localities per City**
  - Locality / Area name
  - City link
  - Popular tag (Yes/No)

### 4.2. Projects Master (optional but useful)

- **Project ID**  
- **Project Name**  
- **Builder / Developer**  
- **City, Locality**  
- **Project Type**
  - Township, NA plots, Apartment project, etc.  
- **Status**
  - Launched, Under Construction, Completed  
- **RERA Details**
  - RERA ID, status  
- **Linked Properties**
  - One-to-many link: specific units / flats / plots  
- **Project Description, Highlights, Amenities**  
- **Project Media**
  - Hero image, gallery, video, brochure PDF

---

## 5. Leads / Enquiries Management

**Purpose**: “Enquire Now” buttons, contact forms, project enquiry se aane wale sabhi leads ko track karna.

### 5.1. Lead Fields

- Lead ID (auto)  
- Name  
- Email  
- Mobile Number  
- City (optional: from user)  
- Inquiry Type:
  - Buy, Invest, Site Visit, Callback, More Info  
- Source:
  - Property ID / Project ID (kis listing se enquiry aayi)
  - Page URL
  - Campaign / UTM (if available)
- Message / Notes (user ka message)  
- Date/Time of enquiry  

### 5.2. Lead Workflow & Assignment

- **Status**
  - New, In Contact, Site Visit Scheduled, Proposal Sent, Closed – Won, Closed – Lost  
- **Assigned To (Sales Person / Agent)**
  - Admin user id  
- **Internal Notes**
  - Follow-up details, call notes  
- **Next Follow-up Date**  

### 5.3. Lead Views & Filters

- Filter by:
  - Date range, City, Status, Assigned to, Source (Property / Project)  
- Export option (CSV/Excel) – optional but useful.

---

## 6. Users (Buyers) & Roles (Admins / Sales)

### 6.1. Buyer Users (Front-end Login/Register)

- User ID  
- Full Name  
- Email  
- Mobile Number  
- Signup Date  
- Last Login Date / time  
- Status (Active / Blocked)  
- User Type (Buyer / Investor / Agent – optional segmentation)

**User Activity:**

- Saved / Favourited Properties list  
- Past enquiries linked to this user  
- Recently viewed properties (optional)

### 6.2. Admin & Staff Users

- Admin User ID  
- Name  
- Email  
- Role:
  - Super Admin
  - Content Admin (properties, pages)
  - Sales Agent (leads only)
- Status (Active / Inactive)  
- Permissions (role-based access control)
  - Property CRUD
  - Leads read/write
  - Content edit
  - User management

---

## 7. Contact / Support Queries

### 7.1. Contact Form Submissions

- Query ID  
- Name  
- Email  
- Phone  
- Topic / Category:
  - General, Project Enquiry, Partnership, Careers, Support  
- Message  
- Source page (URL)  
- Date/Time  
- Status:
  - New, In Progress, Resolved, Closed  
- Internal notes (response summary)

---

## 8. Blog / SEO Content Management

Navbar me “Blog” diya hua hai, iske liye admin module:

- Post ID  
- Title  
- Slug (URL)  
- Thumbnail Image  
- Short Excerpt / Summary  
- Full Content (rich text)  
- Tags (NA Plots, Pune, Investment Tips, Legal, etc.)  
- Author  
- Publish Date & Time  
- Status:
  - Draft, Scheduled, Published, Archived  
- SEO Fields:
  - Meta Title, Meta Description
  - OG Image (optional)

---

## 9. Analytics / Overview Dashboard

**Top-level summary cards:**

- Total active properties  
- Total leads (last 30 days / custom range)  
- New user signups (last 30 days)  
- Total enquiries today / this week  

**Lists / Charts:**

- Most viewed properties (top 5–10)  
- Most enquired properties (top 5–10)  
- Leads by:
  - City
  - Source (property vs contact form vs campaign)  
- Lead status funnel (New → In Contact → Site Visit → Closed)

---

## 10. Global Settings & Masters

### 10.1. General Settings

- Site name, logo, favicon (optional)  
- Default currency (₹) & formatting options  
- Timezone  

### 10.2. Contact & Branding Info

- Primary office address  
- Contact phone numbers  
- Support email ID  
- Social media links (Facebook, Instagram, YouTube, LinkedIn)  
- Footer text / disclaimers  

### 10.3. Master Lists (Editable from Admin)

- Property Types list  
- BHK options (1, 1.5, 2, 2.5, 3, 4+)  
- Amenities list (used everywhere)  
- City & Locality master (if not in separate module)  

---

## 11. Optional (Future) Features

- Site visit scheduling (calendar + slots)  
- Broker / Channel partner portal  
- Promotional banners / homepage sliders  
- Email/SMS integrations for lead alerts