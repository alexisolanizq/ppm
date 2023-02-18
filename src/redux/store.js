import { configureStore } from '@reduxjs/toolkit';

// Auth
import authSlice from './login/authSlice';

// Catalogs
import areas from './catalogs/areaSlice';
import jobAreaProcedurePhases from './catalogs/jobAreaProcedurePhaseSlice';
import currency from './catalogs/currencySlice';
import users from './catalogs/userSlice';
import phases from './catalogs/phaseSlice';
import employees from './catalogs/employeeSlice';
import permissions from './catalogs/permissionSlice';
import managementsSlice from './catalogs/managementSlice';
import currencyCountry from './catalogs/CurrencyCountrySlice';
import countrySlice from './catalogs/countriesSlice';
import countrySliceClone from './catalogs/countrySliceClone';
import instructionSliceClone from './catalogs/instructionSliceClone';
import noticePerActionSlice from './catalogs/noticePerActionSlice';
import noticeNameSlice from './catalogs/noticeNameSlice';
import signatories from './catalogs/signatoriesSlice';
import coordinationSlice from './catalogs/coordinationsSlice';
import subLabelsSlice from './catalogs/subLabelsSlice';
import processesManagmentSlice from './catalogs/processesManagmentSlice';
import tempRepositoryFolders from './catalogs/tempRepositoryFoldersSlice';
import subManagementsSlice from './catalogs/subManagementSlice';
import correspondences from './catalogs/correspondenceSlice';
import banksSlice from './catalogs/bankSlice';
import proceduresSlice from './generals/procedureSlice';
import paymentRights from './catalogs/paymentRightSlice';
import customerDocumentsSlice from './catalogs/customerDocumentsSlice';
import defaultNotesSlice from './catalogs/defaultNoteSlice';
import legalFiguresSlice from './catalogs/legalFiguresSlice';
import legalProcedureFiguresSlice from './catalogs/legalProcedureFiguresSlice';
import ppmDocumentSlice from './catalogs/ppmDocumentSlice';
import machoteRelationship from './catalogs/machoteRelationshipPPMSlice';
import mailSlice from './generals/mailSlice';
import classesSlice from './catalogs/classesSlice';
import officeSlice from './generals/officeSlice';
import clientSlice from './generals/clientSlice';
import impiDocumentsSlice from './catalogs/impiDocumentsSlice';
import authoritiesSlice from './catalogs/authoritiesSlice';
import invoicingConceptsSlice from './catalogs/invoicingConceptsSlice';
import machoteDesignsSlice from './catalogs/machoteDesignSlice';
import mailHeadersSlice from './generals/mailHeadersSlice';
import instructionsSlice from './catalogs/instructionsSlice';
import vacationsAbsences from './generals/vacationsAbsencesSlice';
import countryLanguagesSlice from './catalogs/countryLanguagesSlice';
import authorityNotificationSlice from './catalogs/authorityNotificationSlice';
import paymentType from './catalogs/paymentTypeSlice';
import sortedPhaseSlice from './catalogs/sortedPhaseSlice';
import generics from './catalogs/genericsSlice';
import level from './catalogs/levelSlice';
import auditLog from './catalogs/auditLogSlice';
import languageSlice from './catalogs/languageSlice';
import areasReference from './catalogs/areaReferenceSlice';
import areaManagements from './catalogs/areaManagementSlice'
import areaManagementSubmanagements from './catalogs/areaManagementSubManagementSlice'

// Generals
import agentInvoicingEntities from './generals/agentInvoicingEntitySlice';
import holderInvoicingEntities from './generals/holderInvoicingEntitySlice';
import officeInvoicingEntities from './generals/officeInvoicingEntitySlice';
import holders from './generals/holderSlice';
import notifications from './generals/notifications/notificationSlice';
import notices from './catalogs/noticeSlice';
import ReferenceTypeSlice from './catalogs/referenceTypeSlice';
import impiPayments from './generals/impiPaymentSlice';
import mindbreeze from './generals/mindbreezeSlice';
import reminders from './generals/reminderSlice';
import notes from './generals/notesSlice';
import files from './catalogs/filesSlice';
import contacts from './generals/contactSlice';
import inventors from './generals/inventorSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    areas,
    currency,
    phases,
    employees,
    permissions,
    correspondences,
    paymentRights,
    users,
    machoteRelationship,
    holders,
    notifications,
    notices,
    tempRepositoryFolders,
    subLabels: subLabelsSlice,
    vacationsAbsences,
    country: countrySlice,
    noticePerAction: noticePerActionSlice,
    noticeName: noticeNameSlice,
    signatories,
    coordinations: coordinationSlice,
    processesManagment: processesManagmentSlice,
    managements: managementsSlice,
    submanagements: subManagementsSlice,
    banks: banksSlice,
    procedure: proceduresSlice,
    customerDocuments: customerDocumentsSlice,
    defaultNotes: defaultNotesSlice,
    legalFigures: legalFiguresSlice,
    legalProcedureFigures: legalProcedureFiguresSlice,
    ppmDocuments: ppmDocumentSlice,
    mails: mailSlice,
    invoicingConcepts: invoicingConceptsSlice,
    authorities: authoritiesSlice,
    office: officeSlice,
    client: clientSlice,
    authorityNotifications: authorityNotificationSlice,
    agentInvoicingEntities,
    holderInvoicingEntities,
    officeInvoicingEntities,
    classes: classesSlice,
    instructions: instructionsSlice,
    impiDocuments: impiDocumentsSlice,
    machoteDesign: machoteDesignsSlice,
    mailHeaders: mailHeadersSlice,
    countryLanguage: countryLanguagesSlice,
    referenceType: ReferenceTypeSlice,
    countryClone: countrySliceClone,
    instructionClone: instructionSliceClone,
    impiPayments,
    paymentType,
    mindbreeze,
    reminders,
    notes,
    languages: languageSlice,
    sortedPhases: sortedPhaseSlice,
    files,
    generics,
    contacts,
    level,
    auditLog,
    jobAreaProcedurePhases,
    currencyCountry,
    inventors,
    areasReference,
    areaManagements,
    areaManagementSubmanagements
  }
});

export default store;
