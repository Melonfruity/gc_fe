/* eslint-disable eqeqeq */
import create from 'zustand'
import { getSummary, getAllLeads, updateLead, removeLead, addLead } from './service/query'

export const useStore = create(set => ({
  summary: {},
  selectedSearch: {},
  leads: [],
  handleUpdateEntry: async (entry) => {
    console.log(entry)
    await updateLead(entry);
    return set((state) => ({ leads: state.leads.map((lead) => {
      if (lead.index == entry.index) {
        return entry;
      }
      return lead;
    })}))
  },
  handleRemoveEntry: async (index) => {
    await removeLead(index);
    return set((state) => ({
      leads: state.leads.filter((lead) => lead.index != index)
    }))
  },
  handleAddEntry: async (entry) => {
    const { data } = await addLead(entry);
    return set((state) => ({
      leads: state.leads.concat(data)
    }))
  },
  loadLeads: async () => {
    const { data } = await getAllLeads();
    return set(() => ({ leads: data }))
  },
  setSelectedSearch: (index) => {
    return set((state) => ({ selectedSearch: state.leads.filter((lead) => lead.index == index)[0] }))
  },
  loadSummary: async () => {
    const { data } = await getSummary();
    return set(() => ({ summary: data }))
  },
  setSummary: (summary) => set(() => ({ summary }))
}))