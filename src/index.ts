import { App } from 'vue';
import './assets/main.scss';
import countries from './constants/countries';

// Import all components
import EasyInput from './components/input/EasyInput.vue';
import EasyIcon from './components/icon/EasyIcon.vue';
import EasyCheckbox from './components/checkbox/EasyCheckbox.vue';
import EasyRadioButton from './components/radio/EasyRadioButton.vue';
import EasyButton from './components/button/EasyButton.vue';
import EasyDropdown from './components/dropdown/EasyDropdown.vue';
import EasyLoader from './components/loader/EasyLoader.vue';
import EasyAirline from './components/airlines/EasyAirlineAutocomplete.vue';
import EasyAvatar from './components/avatar/EasyAvatar.vue';
import EasySelect from './components/select/EasySelect.vue';
import EasyCity from './components/city/CityAutocomplete.vue';
import EasyCountry from './components/country/CountryAutocomplete.vue';
import EasyCurrency from './components/currency/CurrencyAutocomplete.vue';
import EasyDocument from './components/document/DocumentAutocomplete.vue';
import EasyTabs from './components/tabs/EasyTabs.vue';
import EasyBackground from './components/background/EasyBackground.vue';
import EasyLayout from './components/layout/EasyLayout.vue';
import EasyModal from './components/modal/EasyModal.vue';
import EasyConfirmModal from './components/modal/EasyConfirmModal.vue';
import EasySidebar from './components/sidebar/NavigationSidebar.vue';
import EasyBreadcrumb from "./components/breadcrumb/EasyBreadcrumb.vue";
import EasyLanguageCurrencyDropdown from "./components/header/language-currency-dropdown/EasyLanguageCurrencyDropdown.vue";
import EasyDatePicker from './components/datapicker/EasyDatePicker.vue';
import EasyMultiSelect from './components/multiselect/EasyMultiSelect.vue';
import EasyPagination from './components/pagination/EasyPagination.vue';
import EasySwitchToggle from './components/switchtoggle/EasySwitchToggle.vue';
import EasyNotificationDropdown from "@/components/header/notification/EasyNotificationDropdown.vue";
import EasyTextarea from './components/textarea/EasyTextarea.vue';
import EasyProfileDropdown from './components/header/profile/ProfileDropdown.vue';
import EasySectionMessage from './components/section-message/EasySectionMessage.vue';
import EasyPopover from './components/popover/EasyPopover.vue';
import EasyPhoneNumber from './components/phone/EasyPhoneNumber.vue';
import EasyServicesTab from './components/services-tab/ServicesTab.vue';
import EasyDropdownSelect from './components/dropdown-select/EasyDropdownSelect.vue';
import EasyAirport from './components/airports/EasyAirportAutocomplete.vue';
import EasyPaymentModal from './components/payment/PaymentModal.vue';
import EasyInputNumber from "@/components/input-number/EasyInputNumber.vue";
import EasyLoginModal from './components/login/EasyLoginModal.vue';

const components = [
  EasyInput,
  EasyIcon,
  EasyRadioButton,
  EasyCheckbox,
  EasyButton,
  EasyDropdown,
  EasyLoader,
  EasyAirline,
  EasyAvatar,
  EasySelect,
  EasyCity,
  EasyCountry,
  EasyCurrency,
  EasyDocument,
  EasyTabs,
  EasyBackground,
  EasyLayout,
  EasyModal,
  EasyConfirmModal,
  EasySidebar,
  EasyBreadcrumb,
  EasyLanguageCurrencyDropdown,
  EasyDatePicker,
  EasyMultiSelect,
  EasyPagination,
  EasyNotificationDropdown,
  EasySwitchToggle,
  EasyTextarea,
  EasyNotificationDropdown,
  EasyProfileDropdown,
  EasySectionMessage,
  EasyPopover,
  EasyPhoneNumber,
  EasyServicesTab,
  EasyDropdownSelect,
  EasyAirport,
  EasyPaymentModal,
  EasyInputNumber,
  EasyLoginModal
];

export default {
  install(app: App) {
    components.forEach(component => {
      const componentName = component.name || component.__name;
      if (componentName) {
        app.component(componentName, component);

      }
    });
  }
};

// Export individual components for direct import
export {
  EasyInput,
  EasyIcon,
  EasyRadioButton,
  EasyCheckbox,
  EasyButton,
  EasyDropdown,
  EasyLoader,
  EasyAirline,
  EasyAvatar,
  EasySelect,
  EasyCity,
  EasyCountry,
  EasyCurrency,
  EasyDocument,
  EasyTabs,
  EasyBackground,
  EasyLayout,
  EasyModal,
  EasyConfirmModal,
  EasySidebar,
  EasyBreadcrumb,
  EasyLanguageCurrencyDropdown,
  EasyDatePicker,
  EasyMultiSelect,
  EasyPagination,
  EasySwitchToggle,
  EasyTextarea,
  EasyNotificationDropdown,
  EasyProfileDropdown,
  EasySectionMessage,
  EasyPopover,
  EasyPhoneNumber,
  EasyServicesTab,
  EasyDropdownSelect,
  EasyAirport,
  EasyPaymentModal,
  EasyInputNumber,
  EasyLoginModal
};

// Export all types
export type {
  IAirline,
  ICountry,
  ICurrency,
  IDocument,
  ICity,
  IPhoneNumber,
  IAirport
} from './types/autocomplete';
export type { IItem, DatepickerModelType, ISidebarItem } from './types/ui';
export type { IUser, IUserCurrency, IUserLanguage, IContactItem, ICompanyInfo, IBankDetails } from './types/user';
export type { LocaleTypes, ServicesTypes, IService, EnvTypes } from './types';
export type { IContractBalance, IProvider } from './types';
// Export utility functions
export { catcher } from './utils/catcher';
export { debounce } from './utils/debounce';
export { padStart } from './utils/string';
export { formatNumber, formatCurrency } from './utils/formatter';
export { countries };
export { languages } from './constants/languages';

export { usePermission } from './composables/usePermission';
export { useWindowSize } from './composables/useWindowSize';
export { useClickOutside } from './composables/useClickOutside';
export { useUser } from './composables/useUser';


