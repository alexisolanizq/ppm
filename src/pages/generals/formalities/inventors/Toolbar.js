import React from 'react'
import MenuRounded from '@mui/icons-material/MenuRounded'
import { Box, Button, Grid } from '@mui/material'
import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import {Search, FileDownloadRounded} from '@mui/icons-material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const Toolbar = ({updateModalShow, setAction, title}) => (
    <Box 
        sx={{flexGrow: 1}}
    >
        <GridToolbarContainer sx={{display: 'flex', flexDirection: 'column'}}>
            <Grid container>
                <Grid item xs={4} container justifyContent="flex-start">
                    <GridToolbarColumnsButton
                        className="noLabel"
                        startIcon={<MenuRounded className="iconToolbar rotateIcon" />}
                    />
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <p className="green-title fs-5 fw-bold m-2">{title}</p> 
                </Grid>
                <Grid item xs={4} container justifyContent="flex-end">
                    <Button>
                        <Search className='iconToolbar' />
                    </Button>
                    <Button 
                        onClick={() =>{
                            updateModalShow(true, false, false)
                            setAction('agregar')
                        }
                        }
                    >
                        <AddCircleOutlineIcon className="iconGreenToolbar" />
                    </Button>
                    <GridToolbarExport 
                        className="noLabel"
                        startIcon={<FileDownloadRounded className="iconToolbar" />}
                    />
                </Grid>
            </Grid>
        </GridToolbarContainer>
    </Box>
)

export default Toolbar