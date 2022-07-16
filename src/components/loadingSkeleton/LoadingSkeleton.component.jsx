import { Skeleton, Grid, Card, CardContent, Hidden } from "@mui/material";

const LoadingSkeleton = () => {

    const skeletonList = [
        {
            'itemNo': 1
        },
        {
            'itemNo': 2
        },
        {
            'itemNo': 3
        },
        {
            'itemNo': 4
        },
        {
            'itemNo': 5
        },
        {
            'itemNo': 6
        },
        {
            'itemNo': 7
        },
        {
            'itemNo': 8
        },
        {
            'itemNo': 9
        },
        {
            'itemNo': 10
        },
        {
            'itemNo': 11
        },
        {
            'itemNo': 12
        },
        {
            'itemNo': 13
        },
        {
            'itemNo': 14
        },
        {
            'itemNo': 15
        },
        {
            'itemNo': 16
        },
        {
            'itemNo': 17
        },
        {
            'itemNo': 18
        },
        {
            'itemNo': 19
        },
        {
            'itemNo': 20
        },
    ]

    return (
        <div>
            <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
                {
                    skeletonList.map(({ itemNo }) => (
                        <Grid
                            item
                            spacing={2}
                            key={itemNo}
                            style={{
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            }}
                        >
                            <Hidden smUp>
                                <Card>
                                    <CardContent>
                                        <Skeleton variant="rectangular" width={260} height={250} />
                                        <Skeleton variant="text" />
                                        <Skeleton variant="text" />
                                        <div style={{
                                            paddingTop: '10px',
                                            paddingBottom: '20px'
                                        }}>
                                            <Skeleton variant="text" />
                                        </div>
                                        <Skeleton variant="rectangular" width={260} height={30} />
                                    </CardContent>
                                </Card>
                            </Hidden>
                            <Hidden smDown>
                                <Card>
                                    <CardContent>
                                        <Skeleton variant="rectangular" width={230} height={250} />
                                        <Skeleton variant="text" />
                                        <Skeleton variant="text" />
                                        <div style={{
                                            paddingTop: '10px',
                                            paddingBottom: '20px'
                                        }}>
                                            <Skeleton variant="text" />
                                        </div>
                                        <Skeleton variant="rectangular" width={230} height={30} />
                                    </CardContent>
                                </Card>
                            </Hidden>
                        </Grid>
                    ))
                }
            </Grid>
        </div >
    )
}

export default LoadingSkeleton;