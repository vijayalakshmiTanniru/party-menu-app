Frontend Assignment - 2025
Overview

your UI design skills and logical thinking. The app allows users to select dishes for their party from a
categorized menu. The goal is to demonstrate your understanding of component architecture, navigation,

Figma Link: [link]

Functional Requirements
1. Menu Categories
Four meal types must be displayed as selectable tabs:
Starter
Main Course
Dessert
Sides
Tapping a tab should show dishes related to that category.
2. Dish List
Each dish card should display:
Dish Name
Short Description
Image
Button to Add/Remove the dish
A link/button labeled "Ingredient" to view ingredients
Added dishes must be visually marked and included in the selected count.
3. Search Functionality
A search bar must be available at the top.
Should filter dishes based on dish name (case-insensitive).
Search must apply only within the selected meal category.
filtering, and list rendering in ReactJS.
Build a Party Menu Selection App using ReactJS. The purpose of this assignment is to evaluate

4. Veg / Non-Veg Filter
Two toggle filters: Veg and Non-Veg.
Must filter dishes based on the selected type.
Filtered results must update the dish list immediately.
5. Dish Selection Summary
Show the count of selected dishes in each category tab.
Also show a total selected dish count at the bottom.
Display a Continue button (no navigation needed after that).
6. Ingredient Detail Screen
Clicking "Ingredient" on a dish should navigate to a new screen.
Must display:
Dish name and a short description
Ingredient list with quantities (mock data)
UI should be clean and match the mock design where possible.

Tech Constraints

Must use functional components and React Hooks.
No need for data persistence or local storage.
Use mock JSON data for dish and ingredient listings.
Navigation should be implemented using React Navigation.# party-menu-app
