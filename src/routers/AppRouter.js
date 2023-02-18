import React, { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

import RequireAuth from '@Component/security/RequireAuth';

import Layout from '@Component/layout/Layout';

import ManualFormalities from '@Pages/generals/procedure/manualFormalities/Index';
import RegistrationProcedure from '@Pages/generals/procedure/RegistrationProcedure';
import SearchProcedure from '@Pages/generals/procedure/SearchProcedure';

import Countries from '@Pages/catalogs/countries/Countries';
import NoticeName from '@Pages/catalogs/nameNotice/NoticeName';
import Classes from '@Pages/catalogs/classes/Classes';
import Instructions from '@Pages/catalogs/instructions/Instructions';
import NoticePerAction from '@Pages/catalogs/noticePerAction/Notifications';
import Signatories from '@Pages/catalogs/signatories/Signatories';
import Coordinations from '@Pages/catalogs/coordinations/Coordinations';
import SubLabel from '@Pages/catalogs/subLabel/SubLabels';
import ProcessManagment from '@Pages/catalogs/processManagment/ProcessManagment';
import PermissionLevels from '@Pages/catalogs/permissons/PermissionLevels';
import ImpiDocuments from '@Pages/catalogs/impiDocuments/ImpiDocuments';
import Banks from '@Pages/catalogs/banks/Banks';
import Authorities from '@Pages/catalogs/authorities/Authorities';
import CustomerDocuments from '@Pages/catalogs/customerDocuments';
import DefaultNotes from '@Pages/catalogs/defaultNotes';
import LegalFigures from '@Pages/catalogs/legalFigures/LegalFigures';
import LegalProcedureFigures from '@Pages/catalogs/legalProcedureFigures/LegalProcedureFigures';
import PPMDocuments from '@Pages/catalogs/ppmDocuments';
import MachoteDesign from '@Pages/catalogs/machoteDesign';
import MachoteDesignCreate from '@Pages/catalogs/machoteDesign/MachoteDesignCreate';
import MachoteRelationship from '@Pages/catalogs/machoteRelationship/MachoteRelationship';
import SortPhase from '@Pages/catalogs/sortPhase/SortPhase';
import DirectoryList from '@Pages/catalogs/directory/DirectoryList';
import InvoicingConcepts from '@Pages/catalogs/invoicingConcepts/InvoicingConcepts';
import AuthorityNotifications from '@Pages/catalogs/authorityNotifications';
import TempRepositoryFolders from '@Pages/catalogs/tempRepositoryFolders/TempRepositoryFolders';

import Evirtual from '@Pages/generals/evirtual';

import Procedure from '@Pages/generals/formalities/Procerdure';
import VacationsAbsences from '@Pages/generals/control/vacationsAbsences/VacationsAbsences';
import Holders from '@Pages/generals/holders/Holders';
import Holder from '@Pages/generals/holders/Holder';
import NotesForm from '@Pages/generals/notes/NotesForm';

import Mindbreeze from '@Pages/generals/formalities/mindbreeze/Mindbreeze';
import MindbreezeList from '@Pages/generals/formalities/mindbreeze/MindbreezeList';

import ClientDetail from '@Pages/generals/client/ClientDetail';
import HolderFormPage from '@Pages/generals/holders/HolderFormPage';
import InvoicingEntitiesClients from '@Pages/generals/invoicingEntities/InvoicingEntitiesClients';
import InvoicingEntitiesHolders from '@Pages/generals/invoicingEntities/InvoicingEntitiesHolders';
import InvoicingEntityAddClient from '@Pages/generals/invoicingEntities/InvoicingEntityAddClient';
import InvoicingEntityEditClient from '@Pages/generals/invoicingEntities/InvoicingEntityEditClient';
import InvoicingEntityShowClient from '@Pages/generals/invoicingEntities/InvoicingEntityShowClient';
import Contact from '@Pages/generals/contact/Contact';
import ContactFormPage from '@Pages/generals/contact/ContactFormPage';
import OfficesAddByClient from '@Pages/generals/office/OfficesAddByClient';
import ContactSearch from '@Pages/generals/contact/ContactSearch';

import Login from '@Pages/login/Login';
import ClientEdit from '@Pages/generals/client/ClientEdit';
import AttrByCountryForm from '@Pages/catalogs/attrByCountry/AttrByCountryForm';
import Employees from '@Pages/catalogs/employees/Employees';
import ListRecipientsClients from '@Pages/generals/listRecipients/ListRecipientsClients';
import ListRecipientsShow from '@Pages/generals/listRecipients/ListRecipientsShow';
import EVirtualConsultClient from '@Pages/generals/evirtual/EVirtualConsultClient';
import EVirtualUploadClient from '@Pages/generals/evirtual/EVirtualUploadClient';
import CountryLanguages from '@Pages/catalogs/countryLanguages/CountryLanguages';
import EmployeesEdit from '@Pages/catalogs/employees/EmployeesEdit';
import UserAdd from '@Pages/catalogs/users/UserAdd';
import AreaManagements from '@Pages/catalogs/AreasManagements/AreaManagements';
import AreaManagementSubManagements from '@Pages/catalogs/areaMaganementSubManagements/AreaManagementSubManagements';

const PaymentRights = lazy(() => import('@Pages/catalogs/paymentRights/PaymentRights'));
const Language = lazy(() => import('@Pages/catalogs/languages/Language'));
const ImpiPayments = lazy(() =>
  import('@Pages/generals/impiPayments/ImpiPayments')
);
const OfficeDetail = lazy(() => import('@Pages/generals/office/OfficeDetail'));
const EmployeesDetail = lazy(() =>
  import('@Pages/catalogs/employees/EmployeesDetail')
);
const EmployeesAdd = lazy(() =>
  import('@Pages/catalogs/employees/EmployeesAdd')
);
const UserDetail = lazy(() => import('@Pages/catalogs/users/UserDetail'));
const UserEdit = lazy(() => import('@Pages/catalogs/users/UserEdit'));
const Users = lazy(() => import('@Pages/catalogs/users/Users'));
const ContactFormAddClient = lazy(() =>
  import('@Pages/generals/contact/ContactFormAddClient')
);
const OfficesClient = lazy(() =>
  import('@Pages/generals/office/OfficesClient')
);
const ClientSearch = lazy(() => import('@Pages/generals/client/ClientSearch'));
const ClientAdd = lazy(() => import('@Pages/generals/client/ClientAdd'));
const Mail = lazy(() => import('@Pages/generals/mail'));
const Catalogs = lazy(() => import('@Pages/catalogs/Catalogs'));
const Areas = lazy(() => import('@Pages/catalogs/areas/Areas'));
const AreasReferences = lazy(() =>
  import('@Pages/catalogs/areasReferences/AreasReferences')
);
const Main = lazy(() => import('@Component/layout/Main'));
const Notes = lazy(() => import('@Pages/generals/notes/Notes'));
const Notifications = lazy(() =>
  import('@Pages/generals/notifications/Notifications')
);
const Notice = lazy(() => import('@Pages/generals/notice/Notice'));
const Reminder = lazy(() => import('@Pages/generals/reminders/Reminder'));

const Phases = lazy(() => import('@Pages/catalogs/phases/Phases'))
const JobAreaProcedurePhases = lazy(() => import('@Pages/catalogs/jobAreaProcedurePhases/JobAreaProcedurePhases'))
const Correspondences = lazy(() => import('@Pages/catalogs/correspondences/Correspondences'))
const Managements = lazy(() => import('@Pages/catalogs/managements/Management'))
const SubManagements = lazy(() => import('@Pages/catalogs/subManagements/SubManagement'))
const Currency = lazy(() => import('@Pages/catalogs/currency/Currency'))
const CurrencyCountry = lazy(() => import('@Pages/catalogs/currencyCountry/CurrencyCountry'))

const AppRouter = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/" element={<Layout />}>
      <Route element={<RequireAuth />}>
        <Route index element={<Main />} />

        <Route path="recordatorios" element={<Reminder />} />
        <Route path="avisos" element={<Notice />} />
        <Route path="notificaciones" element={<Notifications />} />
        <Route path="notas" element={<Notes />} />
        <Route path="pagos" element={<ImpiPayments />} />
        <Route path="correo" element={<Mail />} />
        <Route path="notas/crear" element={<NotesForm />} />

        <Route path="titulares">
          <Route index element={<Holders />} />
          <Route path="crear" element={<HolderFormPage />} />
          <Route path=":id">
            <Route index element={<Holder />} />
            <Route path="editar" element={<HolderFormPage />} />

            <Route path="entidades-facturacion">
              <Route index element={<InvoicingEntitiesHolders />} />
              <Route
                path=":invoicingEntityId"
                element={<InvoicingEntityShowClient />}
              />
              <Route path="agregar" element={<InvoicingEntityAddClient />} />
              <Route
                path=":invoicingEntityId/modificar"
                element={<InvoicingEntityEditClient />}
              />
            </Route>

            <Route path="lista-destinatarios">
              <Route index element={<ListRecipientsClients />} />
              <Route path=":listRecipientId" element={<ListRecipientsShow />} />
            </Route>
          </Route>
        </Route>

        <Route path="catalogos">
          <Route index element={<Catalogs />} />
          <Route path="areas" element={<Areas />} />
          <Route path="areas-referencias" element={<AreasReferences />} />
          <Route path="bancos" element={<Banks />} />
          <Route path="autoridades" element={<Authorities />} />
          <Route path="monedas" element={<Currency />} />
          <Route path="monedas-paises" element={<CurrencyCountry />} />
          <Route path="idiomas" element={<Language />} />
          <Route path="idiomas-paises" element={<CountryLanguages />} />
          <Route path="pais" element={<Countries />} />
          <Route path="firmantes" element={<Signatories />} />
          <Route path="conceptos-facturacion" element={<InvoicingConcepts />} />
          <Route
            path="carpetas-repositorio"
            element={<TempRepositoryFolders />}
          />

          <Route path="usuarios">
            <Route index element={<Users />} />
            <Route path=":userId">
              <Route index element={<UserDetail />} />
              <Route path="editar" element={<UserEdit />} />
            </Route>
          </Route>

          <Route path="empleados">
            <Route index element={<Employees />} />
            <Route path="agregar" element={<EmployeesAdd />} />

            <Route path=":empId">
              <Route index element={<EmployeesDetail />} />
              <Route path="editar" element={<EmployeesEdit />}/>
              <Route path="agregar-usuario" element={<UserAdd />} />
            </Route>
          </Route>
        </Route>
        <Route path="catalogos/directorio" element={<DirectoryList />} />
        <Route path="catalogos/fases" element={<Phases />} />
        <Route
          path="catalogos/areas-fases-tramites"
          element={<JobAreaProcedurePhases />}
        />
        <Route path="catalogos/nivel-permisos" element={<PermissionLevels />} />
        <Route path="catalogos/correspondencia" element={<Correspondences />} />
        <Route path="catalogos/derechos-de-pago" element={<PaymentRights />} />
        <Route path="catalogos/machotes" element={<MachoteRelationship />} />
        <Route path="catalogos/ordenar-fases" element={<SortPhase />} />
        <Route
          path="catalogos/atributos-por-pais"
          element={<AttrByCountryForm />}
        />
        <Route path="catalogos/pais" element={<Countries />} />
        <Route path="catalogos/nombres-aviso" element={<NoticeName />} />
        <Route path="catalogos/clases" element={<Classes />} />
        <Route path="catalogos/instrucciones" element={<Instructions />} />
        <Route
          path="catalogos/notificacion-accion"
          element={<NoticePerAction />}
        />
        <Route path="catalogos/coordinaciones" element={<Coordinations />} />
        <Route path="catalogos/sub-etiquetas" element={<SubLabel />} />
        <Route
          path="catalogos/gestion-tramite"
          element={<ProcessManagment />}
        />
        <Route path="catalogos/direcciones" element={<Managements />} />
        <Route path='catalogos/direcciones-areas' element={<AreaManagements />} />
        <Route path="catalogos/documentos-impi" element={<ImpiDocuments />} />
        <Route path="catalogos/direcciones-subdirecciones" element={<AreaManagementSubManagements />} />
        <Route path="catalogos/subdirecciones" element={<SubManagements />} />
        <Route path="catalogos/figura-legal" element={<LegalFigures />} />
        <Route
          path="catalogos/figura-legal-tramite"
          element={<LegalProcedureFigures />}
        />
        <Route
          path="catalogos/documento-cliente"
          element={<CustomerDocuments />}
        />
        <Route
          path="catalogos/notas-predeterminadas"
          element={<DefaultNotes />}
        />
        <Route path="catalogos/documentos-ppm" element={<PPMDocuments />} />
        <Route
          path="catalogos/machotes/crear"
          element={<MachoteDesignCreate />}
        />
        <Route
          path="catalogos/machotes/:ppmDocumentId"
          element={<MachoteDesign />}
        />
        <Route
          path="catalogos/notificaciones-autoridad"
          element={<AuthorityNotifications />}
        />

        <Route path="cliente">
          <Route index element={<ClientSearch />} />
          <Route path="agregar" element={<ClientAdd />} />
          <Route path=":clientId">
            <Route index element={<ClientDetail />} />
            <Route path="editar" element={<ClientEdit />} />

            <Route path="entidades-facturacion">
              <Route index element={<InvoicingEntitiesClients />} />
              <Route
                path=":invoicingEntityId"
                element={<InvoicingEntityShowClient />}
              />
              <Route path="agregar" element={<InvoicingEntityAddClient />} />
              <Route
                path=":invoicingEntityId/modificar"
                element={<InvoicingEntityEditClient />}
              />
            </Route>

            <Route path="sucursales">
              <Route index element={<OfficesClient />} />
              <Route path="agregar" element={<OfficesAddByClient />} />
              <Route path=":offId">
                <Route index element={<OfficeDetail />} />

                <Route path="lista-destinatarios">
                  <Route index element={<ListRecipientsClients />} />
                  <Route
                    path=":listRecipientId"
                    element={<ListRecipientsShow />}
                  />
                </Route>
              </Route>
            </Route>

            <Route path="contacto">
              <Route index element={<Contact />} />
              <Route path="agregar" element={<ContactFormAddClient />} />
              <Route path="editar/:conId" element={<ContactFormPage />} />
            </Route>

            <Route path="lista-destinatarios">
              <Route index element={<ListRecipientsClients />} />
              <Route path=":listRecipientId" element={<ListRecipientsShow />} />
            </Route>

            <Route path="evirtual">
              <Route index element={<EVirtualConsultClient />} />
              <Route path="subir" element={<EVirtualUploadClient />} />
            </Route>
          </Route>
        </Route>
        <Route path="generales/contacto">
          <Route index element={<Contact />} />
          <Route path=":conId" element={<Contact />} />
          <Route path="buscar" element={<ContactSearch />} />
          <Route path="agregar" element={<ContactFormPage />} />
          <Route path="editar/:conId" element={<ContactFormPage />} />
        </Route>
        <Route
          path="generales/evirtual/:clientId/:officeName"
          element={<Evirtual />}
        />

        <Route
          path="control/control-vacaciones-faltas"
          element={<VacationsAbsences />}
        />

        <Route path="tramite">
          <Route index element={<Procedure />} />
          <Route path=":procedureParam" element={<Procedure />} />
          {/* <Route path="automatico" element={<AutomaticFormalities />} /> */}
          <Route path="manual" element={<ManualFormalities />} />
          <Route path="crear" element={<RegistrationProcedure />} />
          <Route path="buscar" element={<SearchProcedure />} />
          <Route path="mindbreeze" element={<Mindbreeze />} />
          <Route path="mindbreeze/list" element={<MindbreezeList />} />
          <Route path="lista-destinatarios">
            <Route index element={<ListRecipientsClients />} />
            <Route path=":listRecipientId" element={<ListRecipientsShow />} />
          </Route>
        </Route>
      </Route>

      <Route path="generales/correo">
        <Route index element={<Mail />} />
      </Route>
      <Route path="*" element={<>Not found</>} />
    </Route>
  </Routes>
);

export default AppRouter;
