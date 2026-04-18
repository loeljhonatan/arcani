// --- 1. ELEMENTOS DE NAVEGACIÓN Y ESTRUCTURA ---
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';      // Reemplaza a Sidebar
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StepperModule } from 'primeng/stepper';

// --- 2. IDENTIDAD Y NOTIFICACIONES ---
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { MessageModule } from 'primeng/message';

// --- 3. FORMULARIOS Y ENTRADAS (El Bazar) ---
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';      // Nuevo Dropdown
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker'; // Reemplaza a Calendar
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

// --- 4. VISUALIZACIÓN DE DATOS (Las Galería) ---
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';

// --- 5. OVERLAYS Y MODALES ---
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';

/**
 * ARCANI UI BUNDLE
 * Agrupa el ADN visual de PrimeNG para una inyección rápida en componentes Standalone.
 */
export const ArcaniUI = [
  // Navegación
  ButtonModule,
  DrawerModule,
  MenubarModule,
  BreadcrumbModule,
  StepperModule,
  // Identidad
  AvatarModule,
  BadgeModule,
  ToastModule,
  TooltipModule,
  MessageModule,
  // Formularios
  InputTextModule,
  InputNumberModule,
  SelectModule,
  CheckboxModule,
  DatePickerModule,
  FloatLabelModule,
  IconFieldModule,
  InputIconModule,
  // Datos
  CardModule,
  TableModule,
  DataViewModule,
  CarouselModule,
  TagModule,
  SkeletonModule,
  // Overlays
  DialogModule,
  ConfirmDialogModule,
  PopoverModule
];
