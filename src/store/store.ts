import { flow, makeAutoObservable } from "mobx";
import { FilterFormValues } from "src/components";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

class Store {
  contacts: ContactDto[] = [];
  favorites: string[] = [];
  groups: GroupContactsDto[] = [];

  contactsLoading = false;
  groupsLoading = false;
  favoritesLoading = false;
  error: string | null = null;
  filterParams: Partial<FilterFormValues> = {};

  constructor() {
    makeAutoObservable(this, {
      fetchContacts: flow,
      fetchGroups: flow,
      fetchFavorites: flow,
      fetchAllData: flow,
    });
    this.fetchAllData();
  }

  *fetchAllData(): Generator<Promise<any>, void, any> {
    try {
      yield Promise.all([
        this.fetchContacts(),
        this.fetchGroups(),
        this.fetchFavorites(),
      ]);
    } catch (error) {
      this.error = "Failed to load initial data";
      console.error("Ошибка загрузки данных:", error);
    }
  }

  *fetchContacts(): Generator<Promise<any>, void, any> {
    this.contactsLoading = true;
    try {
      const response: Response = yield fetch(
        "https://mocki.io/v1/e004c65b-c085-4da0-b806-eb8e2f0dfc84"
      );
      const data: ContactDto[] = yield response.json();
      this.contacts = data;
    } catch (error) {
      this.error = "Failed to load contacts";
      console.error("Ошибка загрузки контактов:", error);
    } finally {
      this.contactsLoading = false;
    }
  }

  *fetchGroups(): Generator<Promise<any>, void, any> {
    this.groupsLoading = true;
    try {
      const response: Response = yield fetch(
        "https://mocki.io/v1/a116c727-7531-4990-9a57-14469ad32128"
      );
      const data: GroupContactsDto[] = yield response.json();
      this.groups = data;
    } catch (error) {
      this.error = "Failed to load groups";
      console.error("Ошибка загрузки групп:", error);
    } finally {
      this.groupsLoading = false;
    }
  }

  *fetchFavorites(): Generator<Promise<any>, void, any> {
    this.favoritesLoading = true;
    try {
      const response: Response = yield fetch(
        "https://mocki.io/v1/e004c65b-c085-4da0-b806-eb8e2f0dfc84"
      );
      const data: ContactDto[] = yield response.json();
      this.favorites = data.slice(0, 8).map((contact) => contact.id);
    } catch (error) {
      this.error = "Failed to load favorites";
      console.error("Ошибка загрузки избранного:", error);
    } finally {
      this.favoritesLoading = false;
    }
  }

  get filteredContacts(): ContactDto[] {
    let result = [...this.contacts];

    if (this.filterParams.name) {
      const name = this.filterParams.name.toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(name));
    }

    if (this.filterParams.groupId) {
      const group = this.groups.find((g) => g.id === this.filterParams.groupId);
      if (group) {
        result = result.filter((c) => group.contactIds.includes(c.id));
      }
    }

    return result;
  }

  setFilterParams = (params: Partial<FilterFormValues>) => {
    this.filterParams = params;
  };

  getGroupContacts = (groupId: string) => {
    if (!this.groups.length) return [];
    const group = this.groups.find((g) => g.id === groupId);
    if (!group) return [];
    return this.contacts.filter((c) => group.contactIds.includes(c.id));
  };

  get favoriteContacts(): ContactDto[] {
    return this.contacts.filter((contact) =>
      this.favorites.includes(contact.id)
    );
  }
}

export const store = new Store();
