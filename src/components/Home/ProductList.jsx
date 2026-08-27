import { ElementosGlobales } from '../../context/ElementosGlobales'
import { useContext } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import LinearProgress from '@mui/material/LinearProgress'

function ProductList() {
  const { products, error, loading } = useContext(ElementosGlobales)

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027'
    })
  }))

  return (
    <section>
      {/* Cargando */}
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '90vh',
            width: '100%'
          }}
        >
          <LinearProgress
            aria-label='Loading…'
            sx={{
              width: '80%'
            }}
          />
        </Box>
      )}
      {/* hay errores  */}
      {error && <p> Un error ha ocurrido cargando</p>}
      {/* Cargamos exitosamente y no har errores */}
      {!loading && !error && (
        <Box
          sx={{
            flexGrow: 1,

            // Padding alrededor de toda la grilla
            p: {
              xs: 2,
              sm: 3,
              md: 4
            }
          }}
        >
          <Grid
            container
            spacing={{
              xs: 2,
              md: 3
            }}
            columns={{
              xs: 4,
              sm: 8,
              md: 12
            }}
          >
            {products.map(product => (
              <Grid
                key={product.id}
                size={{
                  xs: 4,
                  sm: 4,
                  md: 4
                }}
                sx={{
                  display: 'flex'
                }}
              >
                <Item
                  sx={{
                    width: '100%',
                    display: 'flex'
                  }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardActionArea
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch'
                      }}
                    >
                      <CardMedia
                        component='img'
                        image={product.images[0]}
                        alt={product.title}
                        sx={{
                          height: 220,
                          objectFit: 'contain',
                          p: 2
                        }}
                      />

                      <CardContent
                        sx={{
                          flexGrow: 1
                        }}
                      >
                        <Typography gutterBottom variant='h5' component='div'>
                          {product.title}
                        </Typography>

                        <Typography
                          variant='body2'
                          sx={{
                            color: 'text.secondary'
                          }}
                        >
                          {product.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions>
                      <Button size='small' color='primary'>
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </section>
  )
}

export default ProductList
