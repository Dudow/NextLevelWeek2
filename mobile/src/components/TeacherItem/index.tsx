import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutline from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    source={{ uri: 'https://github.com/diego3g.png'}} 
                    style={styles.avatar}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        É o diego3g
                    </Text>
                    <Text style={styles.subject}>
                        PhD em Foder
                    </Text>
                </View>
            </View>
            <Text style={styles.bio}>
                EU COMO VADIAAAAAAAS, mas adoro foder traveco anão ai
            </Text>
            <View style={ styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$20,00
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutline}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem