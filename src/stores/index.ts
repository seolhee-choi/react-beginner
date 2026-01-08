import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// const useStore = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));

// Zustand에서 persist 기능은 상태(state)를 브라우저의 스토리지(LocalStorage나 SessionStorage)에 저장(persist)해서
// 페이지를 새로고침하거나 브라우저를 닫았다가 다시 열어도 상태를 유지할 수 있게 해주는 기능

// Zustand는 리액트에서 사용되는 간단한 글로벌 상태 관리 라이브러리
// Persist 미들웨어를 사용하면 Zustand store의 데이터를 브라우저 스토리지에 저장할 수 있다.
// 장바구니, 테마같은 설정을 유지할 때 사용

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthStore {
  user: User;
  setUser: (newUser: User) => void;
  reset: () => void;
}

/*export const useAuthStore = create<AuthStore>(
  devtools((set) => ({
    id: "",
    email: "",
    role: "",

    setId: (newId) => set({ id: newId }),
    setEmail: (newEmail) => set({ email: newEmail }),
    setRole: (newRole) => set({ role: newRole }),

    reset: () => set({ id: "", email: "", role: "" }),
  }))
);*/

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {
        id: "",
        email: "",
        role: "",
      },
      setUser: (newUser: User) => set({ user: newUser }),
      reset: () => {
        (set({
          user: { id: "", email: "", role: "" },
        }),
          localStorage.removeItem("auth-storage"));
      },
    }),
    { name: "auth-storage" }
  )
);
