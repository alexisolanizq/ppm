import React, { useEffect } from 'react';
import { Button, Paper, Popover, Typography } from '@mui/material';
import {
  CONCESSION_NUMBER,
  COUNTRY,
  EXPORT_PROCEDURE,
  FIGURE,
  HOLDER,
  MODIFY_PROCEDURE,
  NO_PERIODS,
  PCT_NUMBER,
  PUBLIC_DOMAIN_DATE,
  RELATED_PROCEDURE,
  RENEWAL_DATE,
  RENOVATIONS,
  REQUEST_NUMBER
} from '@Const/const';
import LinkText from '@Component/common/link/LinkText';

const Information = ({
  data,
  open,
  popoverId,
  openPopover,
  handlePopover,
  procedureParam,
  ProcedureRenewals,
  handlePopoverClose,
  getProcedureRenewalById
}) => {
  useEffect(() => {
    getProcedureRenewalById(procedureParam);
  }, []);
  return (
    <Paper className="p-0 m-3">
      <div className="card-header d-flex justify-content-between bg-white green-color fw-bold">
        <p>Facturación</p>
        <div className="d-flex justify-content-between">
          <p className="mr-3">{EXPORT_PROCEDURE}</p>
          <p className="mr-3">{MODIFY_PROCEDURE}</p>
          <p className="mr-3">Configuración trámite</p>
          <LinkText text="Lista destinatarios" to="lista-destinatarios" />
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <p className="fw-bold">{RELATED_PROCEDURE}</p>
              <p className="text-muted">{data?.procReference}</p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{FIGURE}</p>
              <p className="text-muted">
                {' '}
                {data?.legalFigure?.jobAreaReferenceType?.joaName} -{' '}
                {data?.legalFigure?.lefiSpanishName}
              </p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{COUNTRY}</p>
              <p className="text-muted">{data?.country?.counNameEng}</p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{PCT_NUMBER}</p>
              <p className="text-muted">PCT/CA2016/00148 17 may 16</p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{REQUEST_NUMBER}</p>
              <p className="text-muted">MX/2015/182494</p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{CONCESSION_NUMBER}</p>
              <p className="text-muted">296148 01 dic 16</p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">Vigencia</p>
              <p className="text-muted">
                01 dic 45{' '}
                <Button
                  variant="outlined"
                  size="small"
                  className="text-capitalize ml-3"
                  color="success"
                >
                  Extender vigencia
                </Button>
              </p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{RENEWAL_DATE}</p>
              <Button
                sx={{
                  margin: 0,
                  padding: 0,
                  fontSize: '13px',
                  textTransform: 'capitalize'
                }}
                aria-describedby={popoverId}
                onClick={handlePopover}
              >
                <span className="text-success tex-underline">
                  26 abr 22 Periodo: 18-22
                </span>
              </Button>
              <Popover
                id={popoverId}
                open={open}
                anchorEl={openPopover}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                <Typography
                  className="secondary-green-color fw-bold"
                  sx={{ p: 1, fontSize: '13px', textAlign: 'center' }}
                >
                  {RENOVATIONS}
                </Typography>
                {ProcedureRenewals.length ? (
                  ProcedureRenewals.map((item) => (
                    <Typography
                      key={item.prreId}
                      sx={{ paddingY: 1, paddingX: 2, fontSize: '13px' }}
                    >
                      {item.prrePeriod}
                    </Typography>
                  ))
                ) : (
                  <Typography sx={{ p: 2, fontSize: '13px' }}>
                    {NO_PERIODS}
                  </Typography>
                )}
              </Popover>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{PUBLIC_DOMAIN_DATE}</p>
              <p className="text-muted"> 16 mar 22 </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <p className="fw-bold">Título</p>
              <p className="text-muted text-uppercase">
                {' '}
                <span className="fw-bold text-dark">[En]</span> Internet based
                methods and system for worldwide promoting and offering for sale
                or licensepatent rights and patent applications
              </p>
            </div>
            <div className="mb-3">
              <p className="fw-bold">{HOLDER}</p>
              <p className="text-success">PGTXS INC</p>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Information;
