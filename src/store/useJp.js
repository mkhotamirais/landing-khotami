import { create } from "zustand";

const jpUrl = `https://jsonplaceholder.typicode.com`;

export const useJp = create((set) => ({
  // client
  nav: false,
  toggNav: () => set((s) => ({ nav: !s.nav })),
  exitNav: () => set({ nav: false }),
  userView: JSON.parse(localStorage.getItem("lp-jpUser-view")) || "table",
  setUserView: (userView) => {
    set({ userView });
    localStorage.setItem("lp-jpUser-view", JSON.stringify(userView));
  },
  // server
  users: null,
  singleUser: null,
  loadUserPage: false,
  errUserPage: false,
  loadUserPost: false,
  getUsers: async () => {
    set({ loadUserPage: true });
    let response = await fetch(`${jpUrl}/users`);
    let result = await response.json();
    set({ loadUserPage: false, users: result });
  },
  getUserById: async (id) => {
    set({ loadUserPage: true });
    let response = await fetch(`${jpUrl}/users/${id}`);
    let result = await response.json();
    set({ loadUserPage: false, singleUser: result });
  },
  posts: null,
  singlePost: null,
  loadPostPage: false,
  errPostPage: false,
  getPosts: async () => {
    set({ loadPostPage: true });
    let response = await fetch(`${jpUrl}/posts`);
    let result = await response.json();
    set({ loadPostPage: false, posts: result });
  },
  getPostById: async (id) => {
    set({ loadPostPage: true });
    let response = await fetch(`${jpUrl}/posts/${id}`);
    let result = await response.json();
    set({ loadPostPage: false, singlePost: result });
  },
}));
