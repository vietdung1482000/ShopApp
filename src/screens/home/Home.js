import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { COLOR, Items } from '../../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [accessory, setAccessory] = useState([]);
    const [treding, setTreding] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    const getDataFromDB = () => {
        let productList = [];
        let accessoryList = [];
        let tredingList = [];

        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category == 'product') {
                productList.push(Items[index]);
            } else if (Items[index].category == 'accessory') {
                accessoryList.push(Items[index]);
            } else if (Items[index].category == 'treding') {
                tredingList.push(Items[index]);
            }
        }

        setProducts(productList);
        setAccessory(accessoryList);
        setTreding(tredingList)
    };

    const ProductCard = ({ data }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('ProductInfo', { productID: data.id })}
                style={{
                    width: '48%',
                    marginVertical: 14,
                }}>
                <View
                    style={{
                        width: '100%',
                        height: 100,
                        borderRadius: 10,
                        backgroundColor: COLOR.backgroundLight,
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 8,
                    }}>
                    {data.isOff ? (
                        <View
                            style={{
                                position: 'absolute',
                                width: '20%',
                                height: '24%',
                                backgroundColor: COLOR.green,
                                top: 0,
                                left: 0,
                                borderTopLeftRadius: 10,
                                borderBottomRightRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: COLOR.white,
                                    fontWeight: 'bold',
                                    letterSpacing: 1,
                                }}>
                                {data.offPercentage}%
                            </Text>
                        </View>
                    ) : null}
                    <Image
                        source={data.productImage}
                        style={{
                            width: '80%',
                            height: '80%',
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 12,
                        color: COLOR.black,
                        fontWeight: '600',
                        marginBottom: 2,
                    }}>
                    {data.productName}
                </Text>
                {data.category == 'accessory' ? (
                    data.isAvailable ? (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <FontAwesome
                                name="circle"
                                style={{
                                    fontSize: 12,
                                    marginRight: 6,
                                    color: COLOR.green,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: COLOR.green,
                                }}>
                                Available
                            </Text>
                        </View>
                    ) : (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <FontAwesome
                                name="circle"
                                style={{
                                    fontSize: 12,
                                    marginRight: 6,
                                    color: COLOR.red,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: COLOR.red,
                                }}>
                                Unavailable
                            </Text>
                        </View>
                    )
                ) : null}
                <Text>&#8377; {data.productPrice}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: COLOR.white,
            }}>
            <StatusBar backgroundColor={COLOR.white} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 16,
                    }}>
                    <TouchableOpacity>
                        <Entypo
                            name="shopping-bag"
                            style={{
                                fontSize: 18,
                                color: COLOR.backgroundMedium,
                                padding: 12,
                                borderRadius: 10,
                                backgroundColor: COLOR.backgroundLight,
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                        <MaterialCommunityIcons
                            name="cart"
                            style={{
                                fontSize: 18,
                                color: COLOR.backgroundMedium,
                                padding: 12,
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: COLOR.backgroundLight,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginBottom: 10,
                        padding: 16,
                    }}>
                    <Text
                        style={{
                            fontSize: 26,
                            color: COLOR.black,
                            fontWeight: '500',
                            letterSpacing: 1,
                            marginBottom: 10,
                        }}>
                        DungVV Shop &amp; Service
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: COLOR.black,
                            fontWeight: '400',
                            letterSpacing: 1,
                            lineHeight: 24,
                        }}>
                        Electronics store on Rustaveli Ave
                        {'\n'}This shop offers both products and services
                    </Text>
                </View>
                <View
                    style={{
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: COLOR.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                Products
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: COLOR.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10,
                                }}>
                                41
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLOR.blue,
                                fontWeight: '400',
                            }}>
                            SeeAll
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                        {products.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>

                <View
                    style={{
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: COLOR.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                Accessories
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: COLOR.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10,
                                }}>
                                78
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLOR.blue,
                                fontWeight: '400',
                            }}>
                            SeeAll
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                        {accessory.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>

                <View
                    style={{
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: COLOR.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                New Combo Products
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: COLOR.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10,
                                }}>
                                23
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLOR.blue,
                                fontWeight: '400',
                            }}>
                            SeeAll
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginBottom: 10
                    }}>
                        <Image source={{ uri: 'https://i.pinimg.com/564x/3b/dd/7a/3bdd7a1da87ac60fbc957743161cccc6.jpg' }} style={{
                            width: '100%',
                            height: 100,
                            marginRight: 7,
                            borderRadius: 10
                        }} />
                    </View>
                </View>

                <View
                    style={{
                        padding: 16,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: COLOR.black,
                                    fontWeight: '500',
                                    letterSpacing: 1,
                                }}>
                                Treding
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: COLOR.black,
                                    fontWeight: '400',
                                    opacity: 0.5,
                                    marginLeft: 10,
                                }}>
                                23
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLOR.blue,
                                fontWeight: '400',
                            }}>
                            SeeAll
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}>
                        {treding.map(data => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

export default Home;
