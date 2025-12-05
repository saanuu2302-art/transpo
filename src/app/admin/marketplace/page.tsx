'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
<<<<<<< HEAD
=======
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { adminMarketplaceProducts } from '@/lib/data';
>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469
import { useLanguage } from '@/context/language-context';
import { translations } from '@/lib/translations';

export default function Page() {
  const { language } = useLanguage();
<<<<<<< HEAD
  const t = translations[language].nav.admin;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-headline text-3xl font-bold text-foreground">
          {t.marketplace}
        </h1>
        <p className="text-muted-foreground">
          Manage marketplace settings and listings.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>This page is under construction.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30">
            <p className="text-muted-foreground">
              Marketplace management will be available here.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
=======
  const t = translations[language].admin.marketplace;

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'secondary';
      case 'pending':
        return 'outline';
      case 'rejected':
        return 'destructive';
      default:
        return 'default';
    }
  };

  const getStockVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return 'secondary';
      case 'low stock':
        return 'outline';
      case 'out of stock':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t.product}</TableHead>
              <TableHead>{t.seller}</TableHead>
              <TableHead>{t.price}</TableHead>
              <TableHead>{t.stockStatus}</TableHead>
              <TableHead>{t.approvalStatus}</TableHead>
              <TableHead>{t.actions}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {adminMarketplaceProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage
                      src={product.imageUrl}
                      alt={language === 'kn' ? product.kannadaProductName : product.productName}
                    />
                    <AvatarFallback>
                      {product.productName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <span className="font-medium">
                      {language === 'kn' ? product.kannadaProductName : product.productName}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {language === 'kn' ? product.kannadaSellerName : product.sellerName}
                </TableCell>
                <TableCell>
                  {language === 'kn' ? product.kannadaPrice : product.price}
                </TableCell>
                <TableCell>
                  <Badge variant={getStockVariant(product.stockStatus)}>
                    {language === 'kn' ? product.kannadaStockStatus : product.stockStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(product.approvalStatus)}>
                    {language === 'kn' ? product.kannadaApprovalStatus : product.approvalStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  {product.approvalStatus === 'Pending' && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">{t.approve}</Button>
                      <Button variant="destructive" size="sm">{t.reject}</Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
>>>>>>> 3c83eb72c4fed165f0eb00a08511a386cc6f2469
  );
}
