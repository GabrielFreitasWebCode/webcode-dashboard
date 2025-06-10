import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function PasswordReset() {
    return (
        <div className="min-h-screen">
            <main>
                <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center">
                            <Link href="/login" className="flex items-center text-sm text-primary mb-8 hover:underline">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to sign in
                            </Link>

                            <Card className="w-full max-w-md">
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
                                    <CardDescription className="text-center">
                                        Enter your email address and we will send you instructions to reset your password
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form action="/password-reset-confirmation">
                                        <div className="grid gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" type="email" placeholder="name@example.com" required />
                                            </div>
                                            <Button type="submit" className="w-full">
                                                Send instructions
                                                <Mail className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </form>

                                    <Alert className="mt-6">
                                        <Mail className="h-4 w-4" />
                                        <AlertTitle>Important</AlertTitle>
                                        <AlertDescription>
                                            You will receive an email with a link to reset your password. If you don't see it, please check your spam folder.
                                        </AlertDescription>
                                    </Alert>

                                    <div className="text-center text-sm text-muted-foreground mt-6">
                                        Remembered your password?{" "}
                                        <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                                            Back to sign in
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}