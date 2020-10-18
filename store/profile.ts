import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {RootState} from "~/store/index";
import {Comparator, compare, compareBoolean, sortByComparators} from "~/assets/Sort";

export interface FutureItem {
  future: boolean
}

export interface Skill extends FutureItem {
  name: string,
}

export interface Education extends FutureItem {
  name: string,
}

export const state = () => ({
  name: 'Thomas Müller',
  email: 'thomas.m@hotmail.com',
  includeFuture: false,
  workexperience: [
    {
      description: 'Senior Machine Operator | Schäffler | 2005 - 2020'
    },
    {
      description: 'Technician Apprenticeship | FAG | 2002 - 2005'
    }
  ],
  skills: [
    {
      name: 'G-code programming',
    },
    {
      name: 'CNC programming',
    },
    {
      name: 'Quality Control',
    },
    {
      name: 'Maintenance & Repair',
    },
    {
      name: 'Welding',
    },
    {
      name: 'Plan Management',
    },
    {
      name: 'Rapid tooling',
      future: true
    },
    {
      name: '3D printing',
      future: true
    },
    {
      name: 'Adaptive Manufacturing',
      future: true
    }
  ] as Skill[],
  education: [
    {name: 'Vocational training in machine technology'},
    {name: 'Generative Design for Additive Manufacturing', future: true},
    {name: 'Rapid Manufacturing', future: true},
    {name: 'Designing for 3D Printing with Fusion 360', future: true},
  ] as Education[],
  suggestedJobs: [
    {
      title: 'Additive Manufacturing Technican',
      company: 'Tesla',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
      location: 'Berlin',
      posted: '3 days ago',
      liked: false
    },
    {
      title: 'Quality Assurance',
      company: 'Continental',
      logo: '',
      location: 'Nuremberg',
      posted: '30+ days ago',
      liked: false
    }
  ]
})

export type ProfileState = ReturnType<typeof state>

function sortFutureItem<X extends FutureItem>(state: ProfileState, a: X[], comparators: Comparator<X>[]) {
  return [...a]
    .sort(
      sortByComparators([
        (a: FutureItem, b: FutureItem) => compareBoolean(a.future, b.future),
        ...comparators
      ])
    )
    .filter(i => {
      if (state.includeFuture) {
        return true
      }
      return !i.future
    })
}

export const getters: GetterTree<ProfileState, RootState> = {
  name: state => state.name,
  email: state => state.email,
  suggestedJobs: state => state.suggestedJobs,
  workexperience: state => state.workexperience,
  skills: state => sortFutureItem(state, state.skills, [
    (a, b) => compare(a.name, b.name),
  ]),
  education: state => sortFutureItem(state, state.education, [
    (a, b) => compare(a.name, b.name),
  ]),
}

export const mutations: MutationTree<ProfileState> = {
  UPDATE_INCLUDE_FUTURE: (state, includeFuture: boolean) => (state.includeFuture = includeFuture),
}

export const actions: ActionTree<ProfileState, ProfileState> = {}
