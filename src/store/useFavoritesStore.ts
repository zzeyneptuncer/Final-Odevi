import {create} from 'zustand'
import { nanoid } from 'nanoid'

type Favorite = {
  id: string
  siteName: string
  note: string
  url: string
}

interface FavoriteState {
  favorites: Favorite[]
  addFavorite: (fav: Omit<Favorite, 'id'>) => void
  updateFavorite: (id: string, updatedFav: Omit<Favorite, 'id'>) => void
  removeFavorite: (id: string) => void
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  addFavorite: (fav) =>
    set((state) => ({
      favorites: [...state.favorites, { id: nanoid(), ...fav }],
    })),
  updateFavorite: (id, updatedFav) =>
    set((state) => ({
      favorites: state.favorites.map((f) =>
        f.id === id ? { id, ...updatedFav } : f
      ),
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((f) => f.id !== id),
    })),
}))
